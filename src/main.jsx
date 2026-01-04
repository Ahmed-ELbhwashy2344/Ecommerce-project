import React, { StrictMode } from "react";
import "./index.css";
import App from "./App.jsx";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import Cartprovider from "./Component/CartContext/CartContext.jsx";
import { Provider } from "react-redux";
import { store } from "./App/Store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Cartprovider>
        <Provider store={store}>
          <App />
        </Provider>
      </Cartprovider>
    </BrowserRouter>
  </React.StrictMode>
);
