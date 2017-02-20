/**
 * Created by Dima Graebert on 2/20/2017.
 */
import EventEmitter from 'events';
import AppDispatcher from '../dispatcher';
import * as WinnersConstants from '../constants/WinnersConstants';


const CHANGE_EVENT = 'change';

class WinnersStore extends EventEmitter {
    constructor(props) {
        super(props);
        this.winners = [];
        this.dispatcherIndex = AppDispatcher.register(this.handleAction.bind(this));
    }

    getWinners() {
        return this.winners;
    }

    handleAction(action) {
        switch (action.actionType) {
            case WinnersConstants.ADD_WINNER:
                this.winners = [action.winnerInfo, ...this.winners].slice(0, 10);
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

WinnersStore.dispatchToken = null;

export default new WinnersStore();
