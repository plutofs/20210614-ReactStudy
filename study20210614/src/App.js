import './App.css';
import Potato from './Potato';

function Food(props) {
  return <h1>I hate {fav}</h1>;
}


function App() {
  return (
    <div className="App">
      <div>hello</div>
      <Potato />
      <Food fav = "kimchi" />
    </div>
  );
}

export default App;
