import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import { Auth0Provider } from "@auth0/auth0-react";


ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <Auth0Provider
      domain="dev-uwzvy784.us.auth0.com"
      clientId="6P6qx3bKV4K0YDPxJeDZ3CrsBumoHxDk"
      redirectUri={window.location.origin + "/homepage"}
      >
      <App />
    </Auth0Provider>
  </BrowserRouter>
      </Provider>,
  document.getElementById("root")
);

reportWebVitals();
