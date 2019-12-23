import createSagaMiddleware from 'redux-saga';
import RootReducer from './reducers/root_reducer';
import { createStore, applyMiddleware } from 'redux';

declare const window: any;

export default function configureStore() {
    const sagaMiddleware = createSagaMiddleware();
    return {
        ...createStore(RootReducer, {}, applyMiddleware(sagaMiddleware)),
        runSaga: sagaMiddleware.run
    }
}