/**
 * Created by Manish on 8/4/2017.
 */
import { createStore, applyMiddleware, compose} from 'redux';
import reducer from './reducer';
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import rootsaga from '../sagas/rootsaga'
import initialState from './initialState'

// //add middleware
// let finalCreateStore = compose(
//     applyMiddleware(createLogger())
// )(createStore)
//
// export default function configureStore(initialState= {todos: []}) {
//     return finalCreateStore(reducer, initialState)
// }

export default function configureStore(initialState) {
    const logger = createLogger();
    const sagaMiddleware = createSagaMiddleware();
    const middleware = [logger, sagaMiddleware]
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const createCompose = composeEnhancers(applyMiddleware(...middleware))
    const store = createStore (reducer, initialState, createCompose)
    sagaMiddleware.run(rootsaga)
    return store;
}