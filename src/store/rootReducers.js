import { combineReducers } from 'redux';
import exampleRedux from '../exampleRedux/reducer';
import pointers from '../pointers/reducer';


export default combineReducers({
    exampleRedux,
    pointers,
});