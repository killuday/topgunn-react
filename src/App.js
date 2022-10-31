import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Example from './Example';
import Example2 from './Example2';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           <code style={{color:"#61DBFB",fontFamily:"cursive"}}>Uday Bhanu</code> 
        </p>
       {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React.js
  </a>*/}
 
  <Home />
      </header>
    </div>
  );
}


export default App;
