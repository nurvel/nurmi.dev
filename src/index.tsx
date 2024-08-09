import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import TagManager from "react-gtm-module";

const envAuth =
  process.env.NODE_ENV === "production"
    ? "Uy1ZU2eirHiMidAl_yfBpQ"
    : "CxNs4kxI_b1L4PUGBmhLXw";
const envPreview = process.env.NODE_ENV === "production" ? "env-3" : "env-6";

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
