import './App.css';
import PersonList from "./components/PersonList"
import data from './data.json'

function App() {
  return (
    <div className="App">
      <PersonList list={data} />
    </div>
  );
}

export default App;
