
import { CartProvider } from './context/CartContext'
import AppRouter from './routes/AppRouter'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {
  return (
    <CartProvider>
      <AppRouter />
    </CartProvider>
  );
}

export default App;
