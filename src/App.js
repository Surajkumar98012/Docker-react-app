import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <h1>Docker React app</h1>
     <p>This is my first app that i dockarise it.</p>
     <p>I am at the end of Containerising process</p>
     <h1>{`Hello ${process.env.REACT_APP_NAME}`}</h1>
    </div>
  );
}

export default App;
