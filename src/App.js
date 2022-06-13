import React, { useContext, useEffect } from "react";
import "./App.css";
import Main from "./components/pages/Main";
import { WalletContext } from "./store/WalletContext";
import {AllowlistContext} from "./store/AllowlistContext";

const App = () => {
  const { currentAccount, setCurrentAccount } = useContext(WalletContext);
  const { allowlistedAccount, setAllowlistedAccount } = useContext(AllowlistContext);

  const checkIfWalletIsConnected = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      console.log("Make sure you have metamask!");
      return;
    } else {
      console.log("We have the ethereum object", ethereum);
    }

    const accounts = await ethereum.request({ method: "eth_accounts" });

    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("Found an authorized account:", account);
      // check if address is allowlisted
      const allowlist_addresses = require("./addresses.json");
      if (allowlist_addresses.includes(account)) {
        setAllowlistedAccount(true)
      } else {
        setAllowlistedAccount(false)
      }
      setCurrentAccount(account);
    } else {
      console.log("No authorized account found");
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return <Main />;
};

export default App;
