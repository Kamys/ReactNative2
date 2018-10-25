import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './rootReducers';
import saga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const createCustomStore = (() => {
    const store = createStore(
        reducer,
        composeWithDevTools(applyMiddleware(sagaMiddleware)),
    );

    store.runSagaTask = () => {
        store.sagaTask = sagaMiddleware.run(saga);
    };
    store.runSagaTask();

    return store;
})();

export default createCustomStore;