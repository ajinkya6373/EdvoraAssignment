import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {RideContextProvider} from "./context/RideContext"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RideContextProvider >
      <App />
    </RideContextProvider>
  </React.StrictMode>
);

