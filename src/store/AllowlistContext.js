import {createContext, useState} from "react";

export const AllowlistContext = createContext({
    allowlistedAccount: "",
    setAllowlistedAccount() {
    },
});

export const AllowlistContextProvider = (props) => {
    const [allowlistedAccount, setAllowlistedAccount] = useState("");

    return (
        <AllowlistContext.Provider value={{allowlistedAccount, setAllowlistedAccount}}>
            {props.children}
        </AllowlistContext.Provider>
    );
};