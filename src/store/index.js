import {
    createStore,
    compose,
    applyMiddleware
} from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers/rootReducer'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__
        ? compose(
            applyMiddleware(sagaMiddleware),
            window.__REDUX_DEVTOOLS_EXTENSION__(),
        )
        : applyMiddleware(sagaMiddleware),
)

sagaMiddleware.run(rootSaga)
