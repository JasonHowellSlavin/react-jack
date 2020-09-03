import React from 'react';
import ReactDOM from 'react-dom';
import './App.scss';
import Counter  from './Counter/Counter';
import counterReducer from '../reducers/CounterReducer';
import wordPickerReducer from '../reducers/WordPickerReducer';
import rootReducer from '../reducers/RootReducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import WordPicker from './WordPicker/WordPicker';
import MrShow from './MrShow/MrShow';
import BlackJack from './BlackJack/BlackJack';

const store = createStore(rootReducer);
console.log(store.getState());

class App extends React.Component{
    render(){
        return(
            <Provider store={store}>
                <BlackJack />
                {/* <Counter />
                <WordPicker />
                <MrShow /> */}
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));