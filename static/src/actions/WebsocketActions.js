/**
 * Created by Dima Graebert on 2/20/2017.
 */
import * as constants from '../constants/WebsocketConstants';
import AppDispatcher from '../dispatcher/';

class WebsocketActions {

    static connect(url) {
        AppDispatcher.dispatch({
            url,
            actionType: constants.CONNECT,
        });
    }

    static disconnect() {
        AppDispatcher.dispatch({
            actionType: constants.DISCONNECT,
        });
    }

    static postMessage(message) {
        AppDispatcher.dispatch({
            message,
            actionType: constants.POST_MESSAGE,
        });
    }

    static onMessage(message) {
        AppDispatcher.dispatch({
            message,
            actionType: constants.GET_MESSAGE,
        });
    }

    static onError(error) {
        AppDispatcher.dispatch({
            error,
            actionType: constants.GET_ERROR,
        });
    }
}

export default WebsocketActions;
