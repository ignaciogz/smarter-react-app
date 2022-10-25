import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <section className="App-content">
        <ItemListContainer greeting={"Hola React.js (?"} />
        <ItemCount stock={100}/>
      </section>
    </div>
  );
}

export default App;
