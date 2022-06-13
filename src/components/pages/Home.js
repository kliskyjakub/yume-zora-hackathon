import React, {useEffect, useState} from "react";
import styles from "./Dashboard.module.css";
import Footer from "../footer/Footer";
import Header from "../header/Header";

import {ZDK, ZDKNetwork, ZDKChain} from "@zoralabs/zdk";
import ItemPreview from "./ItemPreview";
import SectionSeparator from "../sectionSeparator/SectionSeparator";

const Home = () => {
    const [currentVolume, setCurrentVolume] = useState("");
    const [tokenBalance, setTokenBalance] = useState([]);

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
    const zdk = new ZDK(args)

    const getVolumeData = async () => {
        const args = {
            where: {
                collectionAddresses: ["0xCa21d4228cDCc68D4e23807E5e370C07577Dd152"]
            }
        };

        // TODO: zmenit na collectionStatsAggregate
        const response = await zdk.salesVolume(args);
        // console.log(response.aggregateStat.salesVolume.usdcPrice)
        setCurrentVolume(response.aggregateStat.salesVolume)
    }

    const getCollectionData = async () => {
        const args2 = {
            where: {
                collectionAddresses: ["0xCa21d4228cDCc68D4e23807E5e370C07577Dd152"]
            },
            sort: { // Optional, sorts the response by ascending tokenIds
                direct: "ASC",
                sortKey: "MINTED"
            },
            pagination: {limit: 6}
        };

        const response2 = await zdk.tokens(args2);
        setTokenBalance(response2.tokens.nodes)
    }

    useEffect(() => {
        getCollectionData()
        getVolumeData()
    }, []);

    return (
        <div className={styles["page_wrapper"]}>
            <Header/>
            <div className={styles["section_wrapper"]}>
                <div className={styles["marketplace_wrapper"]}>
                    {"total volume in usd : " + currentVolume.usdcPrice}<br/>
                    {"total volume in eth : " + currentVolume.chainTokenPrice}<br/>
                    {"total num of txns : " + currentVolume.totalCount}<br/>
                    <SectionSeparator/>
                    <div style={{marginTop:"-15px"}}>
                        {tokenBalance.map((token, id) => {
                            return <ItemPreview token={token} id={id}/>
                        })}
                </div>
            </div>
        </div>
    <Footer/>
</div>
)
    ;
};

export default Home;