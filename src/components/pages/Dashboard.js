import React, {useEffect, useState} from "react";
import styles from "./Home.module.css";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import {MediaConfiguration, NFTPreview} from "@zoralabs/nft-components";
import {Link} from "react-router-dom";
import {ZDK, ZDKChain, ZDKNetwork} from "@zoralabs/zdk";
import {useNavigate} from "react-router-dom";
import ItemPreview from "./ItemPreview";

const Dashboard = () => {
    const {ownedTokens, setOwnedTokens} = useState("");

    const STYLE_OVERRIDE = {
        theme: {
            bodyFont: `font-family: courier;`,
            previewCard: {
                height: "20vh",
                background: "black",
            },
        },
    };

    const id = 32938

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
                ownerAddresses: ["0xB2218B65499122C3cDB0B2b41011fBb27b6a2c12"]
            },
        };

        const response = await zdk.tokens(args);
        setOwnedTokens(response.tokens.nodes)
    }

    useEffect(() => {
        getOwnedTokens()
    }, []);

    return (
        <div className={styles["page_wrapper"]}>
            <Header/>
            <div className={styles["section_wrapper"]}>
                your yume-eligible zorbs:<br/><br/>
                get your zora merch!<br/><br/>

                {/*this is the iteration map*/}
                {ownedTokens.map((object, i) => <ItemPreview obj={ownedTokens} key={i} />)}

                {/*this is how it is done manually*/}
                <MediaConfiguration
                    themePreset="dark"
                    networkId="1"
                    style={STYLE_OVERRIDE}>
                    <Link to={{pathname: '/detail', search: ('?id=' + id),}} style={{display: 'inline-block'}}>
                        <NFTPreview id="0" contract="0x8d04a8c79cEB0889Bdd12acdF3Fa9D207eD3Ff63"
                            // TODO: solve the nested anchor tag issue
                            // onclick={{routeChange("0xCa21d4228cDCc68D4e23807E5e370C07577Dd152")}}
                        />
                    </Link>
                </MediaConfiguration>
            </div>
            <Footer/>
        </div>
    );
};

export default Dashboard;