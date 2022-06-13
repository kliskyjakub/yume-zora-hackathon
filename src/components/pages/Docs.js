import styles from "./Docs.module.css";
import React from "react";
import {Link} from "react-router-dom";
import logo from "../../media/sun.gif";
import graphic from "../../media/graphic.webp";
import Footer from "../footer/Footer";
import Header from "../header/Header";

const Docs = () => {
    return (
        <div className={styles["page_wrapper"]}>
            <Header/>
            <div className={styles["section_wrapper"]}>
                --- using decentralised tech to achieve a vision of a free fashion industry ---<br/><br/>
                <b>why</b>
                <p>
                    --**absurd amount of waste**--
                    <p>
                        the mass-market retailers produce clothes in advance<br/>
                        meaning there is always a surplus, leaving over 92 million tonnes of waste a year <a href="https://www.bbc.com/future/article/20200710-why-clothes-are-so-hard-to-recycle" target="_blank">[1]</a>.
                    </p>
                </p>
                <p>
                    --**human rights violations**--
                    <p>
                        corporations prioritise sales to a humane approach by focusing on driving the production price
                        down:<br/>
                        outsourcing to 3rd world countries, with little to no regulation on working conditions or
                        salary.<br/>
                        about 93% of fashion brands aren’t paying garment workers a living
                        wage <a href="https://fashionunited.uk/news/fashion/wastewater-fashion-s-grotesk-sustainability-problem/2020050548770" target="_blank">[2]</a>.<br/>
                        100% of bangladeshi and 99% of vietnamese garment workers didn’t earn a living wage in
                        2019 <a href="https://www.bbc.com/future/article/20200310-sustainable-fashion-how-to-buy-clothes-good-for-the-climate" target="_blank">[3]</a>.
                    </p>
                </p>
                <p>
                    --**limited choice**--
                    <p>
                        with unethical & unecological approach,<br/>
                        a handful of market-dominating firms drive the prices to a point
                        where individual creators cannot sustain themselves.<br/>
                        it results in limited choice which impacts the customer in the end.
                    </p>
                </p>
                <p>
                    yume will disrupt the fast fashion industry.
                </p>
                <p>
                    <b>how</b>
                </p>
                <p>yume nfts.</p>
                <p>
                    --**world-scale on-demand production**--
                    <p>
                        buy the design once and redeem it multiple times with proof-of-ownership from manufacturers
                        across the
                        world. <br/>
                        not a single piece of clothing is produced in advance unless the owner chooses to redeem
                        it.<br/>
                        the number of redemptions is capped to ensure scarcity in the market. no room for
                        surplus.
                    </p>
                </p>
                <p>
                    --**independent choice of the manufacturer**--
                    <p>
                        you choose who produces your clothes from a list of verified manufactures that respect worker’s
                        rights.<br/>
                        this directly allows you to support fair trade without extra effort.
                    </p>
                </p>
                <p>
                    --**voice to smaller creators**--
                    <p>
                        you don’t need to set anything up except minting your designs to be a creator.<br/>
                        directly sell your designs to customers without a middle man.<br/>
                        yume doesn’t support ads.
                    </p>
                </p>
                <p>
                    with yume, good designs from talented creators organically get into the spotlight.
                </p>
                <p>
                    <b>what</b>
                </p>
                <p>
                    yume is the next step of fashion based on scarcity, exclusivity and desirability powered by
                    nfts.
                </p>
                <p>
                    buy a design. redeem it. get the real life garment.
                </p>
                <p>
                    --**yume designs**--<br/><br/>
                    <p>
                        nfts.<br/>
                        1. redeemable multiple times to real-life garments.<br/>
                        2. accessible - anyone can mint their own designs.<br/>
                        3. tradeable - easier to resell than the real-life piece.
                    </p>
                </p>
                <p>
                    --**yume collectibles**--<br/><br/>
                    <p>
                        nfts.<br/>
                        1. give discounts when buying designs or redeeming with certain partner manufacturers<br/>
                        (for example, (yume.first) holders get discounts for our yume designs.)<br/>
                        2. increase the number of redemptions.<br/>
                        3. owners can rent them to earn interest and let others get discounts too.<br/>
                    </p>
                </p>
                <p>
                    <img src={graphic} className={styles["docs_img"]} alt="yume infographic"/>
                </p>
                <p>
                    the yume ecosystem provides extra benefits to further democratise the fashion game.
                </p>
                <p>
                    --**financial incentives of holding yume designs**--
                    <p>
                        exactly the same as holding hyped scarce pieces in real life, but more liquid.<br/>
                        if you own the design, you can resell any time - online marketplace, without need to ship
                        anything.<br/>
                        the whole fashion resell world can be moved to a digital version with yume.
                    </p>
                </p>
                <p>
                    --**financial incentives of holding yume collectibles**--
                    <p>
                        if you own the collectible, you can rent them to others<br/>
                        so they accumulate the discounts and get a higher number of possible redemptions on a
                        piece.<br/>
                        you earn in interest on top of helping others get more attainable prices.<br/>
                    </p>
                </p>
                <p>
                    --**the number and cost of redemptions**--
                    <p>
                        yume’s smart contracts derive it from the number and rarity of the collectibles the wallet
                        address owns.<br/>
                        the production cost when redeeming is obtained using a negative exponential bonding curve <a href="https://medium.com/linum-labs/intro-to-bonding-curves-and-shapes-bf326bc4e11a" target="_blank">[4]</a> to
                        prevent overproduction.
                    </p>
                </p>
                <p>
                    --**transaction fees**--
                    <p>
                        we use ERC721a to achieve efficient minting of all of our nfts.<br/>
                        the design redemptions will be batch-signed making them cheaper to execute.
                    </p>
                </p>
                <p>
                    --**your privacy**--
                    <p>

                        we highly value your privacy.<br/><br/>
                        redemption will utilise the storj cli tech to safely store customer data <a href="https://docs.storj.io/dcs/api-reference/uplink-cli" target="_blank">[5]</a>.<br/>
                        once the order is completed, the data will be removed.<br/><br/>

                        no delivery addresses or any other piece of information will be given to any third party or sold
                        for profit.
                    </p>
                </p>
                <Footer/>
            </div>
        </div>
    )
        ;
};

export default Docs;