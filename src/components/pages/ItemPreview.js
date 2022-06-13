import React, {useState} from "react";
import {MediaConfiguration, NFTPreview} from "@zoralabs/nft-components";
import {Link} from "react-router-dom";

const ItemPreview = (token) => {

    const STYLE_OVERRIDE = {
        theme: {
            bodyFont: `font-family: courier;`,
            previewCard: {
                height: "20vh",
                background: "black",
            },
        },
    };
    console.log("hehe")
    console.log(token)

    return (
        <>
            <MediaConfiguration
                themePreset="dark"
                networkId="1"
                style={STYLE_OVERRIDE}>
                <Link to={{pathname: '/detail', search: ('?id=2'),}} style={{display: 'inline-block'}}>
                    <NFTPreview id="0" contract="0x8d04a8c79cEB0889Bdd12acdF3Fa9D207eD3Ff63"
                        // TODO: solve the nested anchor tag issue
                        // onclick={{routeChange("0xCa21d4228cDCc68D4e23807E5e370C07577Dd152")}}
                    />
                </Link>
            </MediaConfiguration>
        </>
    );
};

export default ItemPreview;