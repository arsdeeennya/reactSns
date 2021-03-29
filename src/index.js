import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import { CookiesProvider } from "react-cookie";

const routing = (
  <React.StrictMode>
    <BrowserRouter>　
      {/* providerから提供されるクッキーの情報をpropsで受け取る */}
      <CookiesProvider>
        <Route exact path="/" component={Login} />
        <Route exact path="/profiles" component={App} />
      </CookiesProvider>
    </BrowserRouter>
  </React.StrictMode>
);

ReactDOM.render(
  routing, document.getElementById('root')
);

reportWebVitals();