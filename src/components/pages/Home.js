import React, {useEffect, useState} from "react";
import styles from "./Dashboard.module.css";
import Footer from "../footer/Footer";
import Header from "../header/Header";

import {ZDK, ZDKNetwork, ZDKChain} from "@zoralabs/zdk";

const Home = () => {
    const [currentVolume, setCurrentVolume] = useState("");
    const [tokenBalance, setTokenBalance] = useState("");

    const getZoraData = async () => {
        const networkInfo = {
            network: ZDKNetwork.Ethereum,
            chain: ZDKChain.Mainnet,
        }

        const API_ENDPOINT = "https://api.zora.co/graphql";
        const args = {
            endPoint: API_ENDPOINT,
            networks: [networkInfo],
            apiKey: process.env.API_KEY
        }

        const zdk = new ZDK(args) // All arguments are optional

        const args1 = {
            where: {
                collectionAddresses: ["0x8d04a8c79cEB0889Bdd12acdF3Fa9D207eD3Ff63"]
            }
        };

        // TODO: zmenit na collectionStatsAggregate
        const response = await zdk.salesVolume(args1);
        // console.log(response.aggregateStat.salesVolume.usdcPrice)
        setCurrentVolume(response.aggregateStat.salesVolume)

        const args2 = {
            where: {
                collectionAddresses: ["0x8d04a8c79cEB0889Bdd12acdF3Fa9D207eD3Ff63"]
            },
            sort: { // Optional, sorts the response by ascending tokenIds
                direct: "DESC",
                sortKey: "NATIVE_PRICE"
            },
            pagination: {limit:3}
        };

        const response2 = await zdk.sales(args2);
        console.log(response2)
        setTokenBalance(response2)

    }

    useEffect(() => {
        getZoraData()
    }, []);

    return (
        <div className={styles["page_wrapper"]}>
            <Header/>
            <div className={styles["section_wrapper"]}>
                <div className={styles["marketplace_wrapper"]}>
                    {"total volume in usd : " + currentVolume.usdcPrice}<br/>
                    {"total volume in eth : " + currentVolume.chainTokenPrice}<br/>
                    {"total num of txns : " + currentVolume.totalCount}<br/><br/>
                    ----------------------------------------<br/>
                    <p>
                        Jakub Kliský<br/>
                        founder<br/>
                        <a href="https://twitter.com/kliskyjakub" className="main"
                           target="_blank">https://twitter.com/kliskyjakub</a>
                    </p>
                    ----------------------------------------<br/>
                    <p>
                        Luke Lee<br/>
                        smart contract dev<br/>
                        <a href="https://twitter.com/etherehyun" className="main"
                           target="_blank">https://twitter.com/etherehyun</a>
                    </p>
                    ----------------------------------------
                    <p>
                        Lukas Babic<br/>
                        marketing<br/>
                        <a href="https://twitter.com/lukasbabic_" className="main"
                           target="_blank">https://twitter.com/lukasbabic_</a>
                    </p>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Home;