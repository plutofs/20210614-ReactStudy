import './App.css';
import Potato from './Potato';

function Food() {
  return <h1>I hate dem</h1>;
}


function App() {
  return (
    <div className="App">
      <div>hello</div>
      <Potato />
      <Food name = "kimchi" />
    </div>
  );
}

export default App;
