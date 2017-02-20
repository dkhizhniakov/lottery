/**
 * Created by Dima Graebert on 2/20/2017.
 */
import * as constants from '../constants/WinnersConstants';
import AppDispatcher from '../dispatcher/';

class WinnersActions {

    static addWinner(winnerInfo) {
        AppDispatcher.dispatch({
            winnerInfo,
            actionType: constants.ADD_WINNER,
        });
    }

    static subscribe() {
        AppDispatcher.dispatch({
            actionType: constants.SUBSCRIBE,
        });
    }

    static unsubscribe() {
        AppDispatcher.dispatch({
            actionType: constants.UNSUBSCRIBE,
        });
    }
}

export default WinnersActions;
