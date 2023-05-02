import logo from './logo.svg';
import './App.scss';
// import ComponentExample from '../component/ComponentExample.js';
import HTMLForm from '../component/HTMLForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hoc Reacjs
        </a> */}
        <img src={logo} className="App-logo" alt="logo" />
        <HTMLForm />
        {/* <ComponentExample /> */}
      </header>
    </div >
  );
}

export default App;
