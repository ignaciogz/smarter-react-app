import Container from 'react-bootstrap/Container';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <section className="App-content">
        <ItemListContainer greeting={"Hola React.js (?"} />
      </section>
    </div>
  );
}

export default App;
