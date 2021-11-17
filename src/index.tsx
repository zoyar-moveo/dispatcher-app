import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <BrowserRouter>
    <Auth0Provider
      domain="dev-uwzvy784.us.auth0.com"
      clientId="6P6qx3bKV4K0YDPxJeDZ3CrsBumoHxDk"
      redirectUri={window.location.origin + "/homepage"}
    >
      <App />
    </Auth0Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
