import React from "react";
import ReactDOM from "react-dom/client";
import moment from "moment";
import "moment/dist/locale/ru";

import App from "./App.tsx";
import "./index.css";

moment.locale("ru");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
