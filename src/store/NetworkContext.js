import {createContext, useState} from "react";

export const NetworkContext = createContext({
    correctNetwork: "",
    setCorrectNetwork() {
    },
});

export const NetworkContextProvider = (props) => {
    const [correctNetwork, setCorrectNetwork] = useState(false);

    return (
        <NetworkContext.Provider value={{ correctNetwork, setCorrectNetwork }}>
            {props.children}
        </NetworkContext.Provider>
    );
};