import {UPDATE, BACK, FORWARD} from '../actions/WordPickerActions';

const initialState = {
    word: '',
    pickedWords: ['',],
    currentPosition: 0
  };

export default function wordPickerReducer(state = initialState, action) {
    console.log('reducer', state, action);
    switch(action.type) {
        case UPDATE:
            let arr = state.pickedWords.slice();

            arr.push(action.word);

            return {
                word: action.word,
                pickedWords: arr,
                currentPosition: state.currentPosition + 1
            }
        case BACK:
            let barr = state.pickedWords.slice();
            let bpos = state.currentPosition - 1;
            
            return {
                currentPosition: bpos,
                pickedWords: state.pickedWords,
                word: barr[bpos]
            }
        case FORWARD:
            let farr = state.pickedWords.slice();
            let fpos = farr.length - 1 > state.currentPosition + 1 ? state.currentPosition + 1 : farr.length - 1;

            return {
                currentPosition: fpos,
                pickedWords: state.pickedWords,
                word: farr[fpos]
            }
        default:
            return state;
    }
};