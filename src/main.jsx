import "./app/assets/styles/index.css";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux";
import App from "./app/App";
import { store } from "./app/redux-store/store";
import { ColorModeContext } from "./app/theme.jsx";


const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <ColorModeContext.Provider>
                <App />
            </ColorModeContext.Provider>
        </Provider>
    </React.StrictMode>
);

