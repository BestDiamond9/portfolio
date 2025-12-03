import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { LangProvider } from "./context/Context";
import { HashRouter } from "react-router-dom";

ReactDOM.render(
  <HashRouter>
    <LangProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </LangProvider>
  </HashRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
