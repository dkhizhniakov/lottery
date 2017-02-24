/**
 * Created by Dima Graebert on 2/20/2017.
 */
import EventEmitter from 'events';
import Rx from 'rx-dom';
import AppDispatcher from '../dispatcher/';
import * as WebsocketConstants from '../constants/WebsocketConstants';
import WebsocketActions from '../actions/WebsocketActions';
import WinnersActions from '../actions/WinnersActions';
import * as WinnersConstants from '../constants/WinnersConstants';


const CHANGE_EVENT = 'change';

class WebsocketStore extends EventEmitter {
    constructor(props) {
        super(props);
        this.socket = null;
        this.currentState = {
            connected: false,
            loggedIn: false,
        };
        this.dispatcherIndex = AppDispatcher.register(this.handleAction.bind(this));
    }

    getCurrentState() {
        return this.currentState;
    }

    static getMessage(message) {
        let messageData = {};
        try {
            messageData = JSON.parse(message);
        } catch (Exception) {
            throw new Error(Exception.toString());
        }
        switch (messageData.type) {
        case WinnersConstants.ADD_WINNER:
            WinnersActions.addWinner(messageData.data);
            break;
        default:
            break;
        }
        return messageData;
        // handle messageData
    }

    handleAction(action) {
        const store = this;
        const openObserver = Rx.Observer.create(() => {
            store.currentState.connected = true;
            store.emitChange();
        });
        switch (action.actionType) {
        case WebsocketConstants.CONNECT:
            this.socket = Rx.DOM.fromWebSocket(
                  action.url,
                  null,
                  openObserver);
            this.socket.subscribe(
                  (e) => {
                      WebsocketStore.getMessage(e.data);
                  },
                  (e) => {
                      WebsocketActions.onError(e);
                  },
                  () => {
                      WebsocketActions.disconnect();
                  },
                );
            break;
        case WebsocketConstants.POST_MESSAGE:
            this.socket.onNext(action.message);
            break;
        case WebsocketConstants.DISCONNECT:
            this.socket = null;
            this.currentState.connected = false;
            this.emitChange();
            break;
        case WebsocketConstants.GET_ERROR:
            this.socket = null;
            this.emitChange();
            break;
        default:
            break;
        }
        return true;
    }

    emitChange() {
        this.emit(CHANGE_EVENT);
    }

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
}

WebsocketStore.dispatchToken = null;

export default new WebsocketStore();
