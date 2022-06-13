import React, {useContext, useEffect, useState} from "react";
import styles from "./Home.module.css";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import {ZDK, ZDKChain, ZDKNetwork} from "@zoralabs/zdk";
import ItemPreview from "./ItemPreview";
import {WalletContext} from "../../store/WalletContext";

const Dashboard = () => {
    const [ownedTokens, setOwnedTokens] = useState([]);
    const {currentAccount, setCurrentAccount} = useContext(WalletContext);

    const getOwnedTokens = async () => {
        const networkInfo = {
            network: ZDKNetwork.Ethereum,
            chain: ZDKChain.Mainnet,
        }

        const API_ENDPOINT = "https://api.zora.co/graphql";
        const args1 = {
            endPoint: API_ENDPOINT,
            networks: [networkInfo],
            apiKey: process.env.API_KEY
        }

        const zdk = new ZDK(args1) // All arguments are optional

        const args = {
            where: {
                collectionAddresses: ["0xCa21d4228cDCc68D4e23807E5e370C07577Dd152"],
                ownerAddresses: [currentAccount]
            },
        };

        if (currentAccount) {
            const response = await zdk.tokens(args);
            setOwnedTokens(response.tokens.nodes)
        } else {
            setOwnedTokens([])
        }
    }

    useEffect(() => {
        getOwnedTokens();
    }, [currentAccount]);

    console.log(ownedTokens)
    return (
        <div className={styles["page_wrapper"]}>
            <Header/>
            <div className={styles["section_wrapper"]}>
                your yume-eligible zorbs:<br/><br/>
                get your zora merch!<br/><br/>

                {!(Array.isArray(ownedTokens) && ownedTokens.length) ?
                    <>
                        there are no zorb nfts in your wallet
                    </>
                    : ownedTokens.map((token, id) => {
                        return <ItemPreview token={token} id={id}/>
                    })
                }
            </div>
            <Footer/>
        </div>
    );
};

export default Dashboard;