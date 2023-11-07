import "./app/assets/styles/index.css";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux";
import App from "./app/App";
import { store } from "./app/redux-store/store";
import { ColorModeContext } from "./app/theme.jsx";
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from "@material-tailwind/react";

const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <ThemeProvider>
      <Provider store={store}>
        <ColorModeContext.Provider>
          <Router>
            <App />
          </Router>
        </ColorModeContext.Provider>
      </Provider>
      </ThemeProvider>
    </React.StrictMode>
  );

