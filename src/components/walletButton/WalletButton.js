import styles from "./WalletButton.module.css";
import React, {useContext, useEffect, useState} from "react";
import {WalletContext} from "../../store/WalletContext";
import {AllowlistContext} from "../../store/AllowlistContext";
import {NetworkContext} from "../../store/NetworkContext";
import Web3Modal from "web3modal";
import {ethers} from "ethers";
import allowlist_addresses from "../../addresses.json";

const WalletButton = (props) => {
    const [isConnecting, setIsConnecting] = useState(false);
    const {currentAccount, setCurrentAccount} = useContext(WalletContext);
    const {correctNetwork, setCorrectNetwork} = useContext(NetworkContext);
    const {allowlistedAccount, setAllowlistedAccount} = useContext(AllowlistContext);

    const listenToChanges = async () => {

        const providerOptions = {};

        const web3Modal = new Web3Modal({
            network: "mainnet",
            cacheProvider: true,
            providerOptions
        });

        const provider = await web3Modal.connect();

        provider.on("accountsChanged", (accounts) => {
            // check whether the account address is still in the allowlist
            const allowlist_addresses = require("../../addresses.json");
            setCurrentAccount(accounts[0]);
            if (allowlist_addresses.includes(accounts[0])) {
                setAllowlistedAccount(true)
            } else {
                setAllowlistedAccount(false)
            }
        });

        provider.on("chainChanged", (chainId) => {
            if (chainId !== "0x1") {
                //wrong network
                // create a 'wrong network' button in the top right corner
                // make the mint button unclickable until correct network is set
                setCorrectNetwork(false)
            } else {
                setCorrectNetwork(true)
            }
        });
    }

    const connectWallet = async () => {
        setIsConnecting(true);

        const providerOptions = {};

        const web3Modal = new Web3Modal({
            network: "mainnet",
            cacheProvider: true,
            providerOptions
        });

        const provider = await web3Modal.connect();
        const ethersProvider = new ethers.providers.Web3Provider(provider);
        const address = await ethersProvider.getSigner().getAddress();

        setIsConnecting(false);

        // check if address is allowlisted
        const allowlist_addresses = require("../../addresses.json");
        if (allowlist_addresses.includes(address)) {
            setAllowlistedAccount(true)
        } else {
            setAllowlistedAccount(false)
        }
        setCurrentAccount(address);
    }

    const disconnectWallet = async () => {
        try {
            const {ethereum} = window;

            if (!ethereum) {
                alert("Get MetaMask!");
                return;
            }

            await window.ethereum.request({
                method: "eth_requestAccounts",
                params: [{eth_accounts: {}}]
            });
            setCurrentAccount("");
        } catch (error) {
            console.log(error);
        }
    };
    const changeNetwork = async () => {
        if (window.ethereum) {
            try {
                await window.ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{chainId: '0x1'}],
                });
            } catch (switchError) {
                // This error code indicates that the chain has not been added to MetaMask.
                // not needed as long as we are on the mainnet
                // if (switchError.code === 4902) {
                //     try {
                //         await ethereum.request({
                //             method: 'wallet_addEthereumChain',
                //             params: [
                //                 {
                //                     chainId: '0x1',
                //                     chainName: '...',
                //                     rpcUrls: ['https://...'] /* ... */,
                //                 },
                //             ],
                //         });
                //     } catch (addError) {
                //         // handle "add" error
                //     }
                // }
                // handle other "switch" errors
            }
        }
    }

    useEffect(() => {
        setCurrentAccount();
        listenToChanges();
    }, []);

    return (
        <div className={styles.navigation_wrapper}>
            <div className={styles.nav_account_wrapper}>
                <div className={styles.nav_account_actions}>
                    {!currentAccount ?
                        <>
                            <div className={styles.button_wrapper}>
                                <button className={styles.account_button} onClick={connectWallet}>
                                    Connect wallet
                                </button>
                            </div>
                        </>
                        :
                        <>
                            {!correctNetwork ?
                                <>
                                    <div className={styles.account_text}>
                                        {currentAccount.slice(0, 6) + "..." + currentAccount.slice(38, 42)}
                                    </div>
                                    <div className={styles.button_wrapper}>
                                        <button className={styles.account_button} onClick={changeNetwork}>
                                            Wrong network
                                        </button>
                                    </div>
                                </>
                                :
                                <>
                                    <div className={styles.account_text}>
                                        {currentAccount.slice(0, 6) + "..." + currentAccount.slice(38, 42)}
                                    </div>
                                    <div className={styles.button_wrapper}>
                                        <button className={styles.account_button} onClick={disconnectWallet}>
                                            Disconnect wallet
                                        </button>
                                    </div>
                                </>
                            }
                        </>
                    }
                </div>
            </div>
        </div>
    );
};

export default WalletButton;
