import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import OrganizationReducer from '../Reducers/reducers';

const rootReducer = combineReducers({OrganizationReducer});

export const Store = createStore(rootReducer, applyMiddleware(thunk));
