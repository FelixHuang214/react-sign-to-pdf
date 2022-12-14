import { StrictMode } from "react";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
