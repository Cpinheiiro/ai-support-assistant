import React from "react";
import ReactDOM from "react-dom/client";

import { Support } from "./containers/Support";
import GlobalStyles from "./styles/globalStyles";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyles />
    <Support />
  </React.StrictMode>,
);
