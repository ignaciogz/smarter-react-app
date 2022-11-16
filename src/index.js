import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { initializeApp } from "firebase/app";
import {initializeFirestore} from 'firebase/firestore';
import firebaseConfig from "./services/prod_keys/firebase";
import './index.scss';

const firebaseApp = initializeApp(firebaseConfig);
initializeFirestore(firebaseApp, {
  experimentalForceLongPolling: true,
  useFetchStreams: false,
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);