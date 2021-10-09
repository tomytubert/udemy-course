import React from "react";
import ReactDOM from "react-dom";
import "./app/layout/style.css";
import App from "./app/layout/App";
import reportWebVitals from "./reportWebVitals";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configStore } from "./app/store/configStore";
import ScrollToTop from "./app/layout/ScrollToTop";


const store = configStore()

const rootEl = document.getElementById("root");
function render() {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <React.StrictMode>
        <ScrollToTop />
          <App />
        </React.StrictMode>
      </BrowserRouter>
    </Provider>,
    rootEl
  );
}

if (module.hot) {
  module.hot.accept("./app/layout/App.js", function () {
    setTimeout(render);
  });
}

render();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
