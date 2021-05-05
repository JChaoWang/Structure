import logo from './logo.svg';
import './App.css';
import React, { Suspense } from 'react';
import Example from './Components/Hooks';

const Welcome = React.lazy(() => import('./Components/Welcome'));
const NumberList = React.lazy(() => import('./Components/NumberList'));
const NameForm = React.lazy(() => import('./Components/NameForm'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Welcome name="WangJiChao" />
          <NumberList />
          <NameForm />
          <Example />
        </header>
      </Suspense>
    </div>
  );
}

export default App;
