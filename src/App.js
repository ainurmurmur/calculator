import React from 'react';
import  './App.css';
import CalcContainer from './Components/CalcContainer.jsx'
import { Provider } from 'react-redux'
import store from '../src/Components/redux-store';

function App() {

  return (
    <div className="App">
        <Provider store={store}>
     <CalcContainer />
     </Provider>
    </div>
  );
}

export default App;
