import React from 'react';
import { Head } from './components/Head'
import { Button } from './components/Button'
import { Input } from './components/Input'
import { ReducerButton } from './components/ReducerButton'
import logo from './logo.svg';
import './App.css';

//React.FC types our App as a React functional component
const  App = () => {

  return (
    <div className="App">
      <Head title="Hello" />
      <Button  
        onClick={e => {
          e.preventDefault()
          console.log(e)
        }}
      >
        <img src={logo} className="App-logo" alt="logo" />
        </Button>
        <ReducerButton />
        <Input />
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        > 
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
