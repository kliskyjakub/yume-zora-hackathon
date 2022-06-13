import React from "react";
import styles from "./Detail.module.css";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import {NFTPreview} from "@zoralabs/nft-components";
import {MediaConfiguration} from "@zoralabs/nft-components";
import {NFTFullPage} from "@zoralabs/nft-components";

const Detail = () => {
    const STYLE_OVERRIDE = {
        theme: {
            bodyFont: {
                fontFamily: "courier",
            },
            fontSizeFull: "14",
        },
    };
    //find the id based on the url
    const id = window.location.search.slice(4)

    return (
        <div className={styles["page_wrapper"]}>
            <Header/>
            <div className={styles["section_wrapper"]}>
                <div className={styles["detail_wrapper"]}>
                    <MediaConfiguration
                        themePreset="dark"
                        networkId="1"
                        style={STYLE_OVERRIDE}>
                        <NFTFullPage id={id} contract="0xCa21d4228cDCc68D4e23807E5e370C07577Dd152"/>
                    </MediaConfiguration>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Detail;