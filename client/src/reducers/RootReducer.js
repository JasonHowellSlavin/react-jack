import { combineReducers } from 'redux';
import counterReducer from './CounterReducer';
import wordPickerReducer from './WordPickerReducer';

export default combineReducers({
    counterReducer,
    wordPickerReducer
});