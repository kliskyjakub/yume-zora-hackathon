import React from "react";
import {MediaConfiguration, NFTPreview} from "@zoralabs/nft-components";
import {Link} from "react-router-dom";

const ItemPreview = ({token, id}) => {

    const STYLE_OVERRIDE = {
        theme: {
            bodyFont: `font-family: courier;`,
            previewCard: {
                height: "20vh",
                background: "black",
            },
        },
    };

    return (
        <>
            <MediaConfiguration
                themePreset="dark"
                networkId="1"
                style={STYLE_OVERRIDE}>
                <Link to={{pathname: '/detail', search: ('?id=' + token.token.tokenId),}} style={{display: 'inline-block'}}>
                    <NFTPreview id={token.token.tokenId} contract="0xCa21d4228cDCc68D4e23807E5e370C07577Dd152"/>
                </Link>
            </MediaConfiguration>
        </>
    );
};

export default ItemPreview;