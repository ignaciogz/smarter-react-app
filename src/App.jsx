import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <section className="App-content">
        <ItemListContainer greeting={"Hola React.js (?"} />
        <ItemDetailContainer />
      </section>
      <section className="App-footer">
        <Footer />
      </section>
    </div>
  );
}

export default App;
