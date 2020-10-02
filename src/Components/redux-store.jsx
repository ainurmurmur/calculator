import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk';
import { compose } from 'redux';
import  CalcReducer  from './Reducer.jsx';

let reducers = combineReducers({

    calc: CalcReducer,

});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,  composeEnhancers(applyMiddleware(thunkMiddleware)));



window.store =store;
export default store;

// form:formReducer,