import {  applyMiddleware, compose, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk';
import { employeesReducers } from '../reducers/employeesReducers';
import { loginReducer } from '../reducers/loginReducer';
import { registroReducer } from "../reducers/registroReducer";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    login: loginReducer,
    registro: registroReducer,
    employee: employeesReducers

})

//para la forma asincrona instalo npm install redux-thunk para usar Middleware
export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)