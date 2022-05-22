import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import TagManager from "react-gtm-module";

const envAuth =
  process.env.NODE_ENV == "production"
    ? "Uy1ZU2eirHiMidAl_yfBpQ"
    : "CxNs4kxI_b1L4PUGBmhLXw";
const envPreview = process.env.NODE_ENV == "production" ? "env-3" : "env-6";

const tagManagerArgs = {
  gtmId: "GTM-K4F7VVV",
  auth: envAuth,
  preview: envPreview,
};
TagManager.initialize(tagManagerArgs);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
