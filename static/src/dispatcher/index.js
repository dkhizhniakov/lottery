import { Dispatcher } from 'flux';


class AppDispatcher {
    constructor() {
        this.dispatcher = new Dispatcher();
        this.currentlyProcessing = false;
        this.actionQueue = [];
    }

    startProcessing() {
        this.currentlyProcessing = true;
        while (this.actionQueue.length > 0) {
            if (this.dispatcher.isDispatching()) {
                return setTimeout(this.startProcessing, 100);
            }
            this.dispatcher.dispatch(this.actionQueue.shift());
        }
        this.currentlyProcessing = false;
        return true;
    }

    dispatch(payload) {
        this.actionQueue = [...this.actionQueue, payload];
        if (!this.currentlyProcessing) {
            this.startProcessing();
        }
    }

    register(callback) {
        return this.dispatcher.register(callback);
    }
}

export default new AppDispatcher();
