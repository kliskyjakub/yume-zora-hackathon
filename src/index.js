import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {AllowlistContextProvider} from "./store/AllowlistContext";
import {WalletContextProvider} from "./store/WalletContext";
import {NetworkContextProvider} from "./store/NetworkContext";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <NetworkContextProvider>
                <WalletContextProvider>
                    <AllowlistContextProvider>
                        <App/>
                    </AllowlistContextProvider>
                </WalletContextProvider>
            </NetworkContextProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);