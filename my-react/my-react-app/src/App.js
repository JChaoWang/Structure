import logo from './logo.svg';
import './App.css';
import Welcome from './Components/Welcome'

function App() {
  const now = new Date();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Welcome
          name="WangJichao"
          date={now}
        />
      </header>
    </div>
  );
}

export default App;
