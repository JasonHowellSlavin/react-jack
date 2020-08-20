import {INCREMENT, DECREMENT, RESET} from '../actions/CounterActions';

const counterState = {
    count: 0
  };

export default function counterReducer(state = counterState, action) {
    console.log('reducer', state, action);
    switch(action.type) {
        case INCREMENT:
            return {
                count: state.count + 1
            }
        case DECREMENT:
            return {
                count: state.count - 1
            }
        case RESET:
            return {
                count: 0
            }
        default:
            return state;
    }
};