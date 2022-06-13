import styles from "./Footer.module.css";
import React from "react";
import twitter from "../../media/twitter.webp"
import discord from "../../media/discord.webp"
import SectionSeparator from "../sectionSeparator/SectionSeparator"

const Footer = (props) => {
    return (
        <div className={styles.footer_wrapper}>
            <SectionSeparator/>
            <div>
                <a href="https://twitter.com/yium_e" className="main" target="_blank">
                    <img src={twitter} className={styles["social"]} alt="Twitter link"/>
                </a>
                <a href="https://discord.gg/r6tPQDUZA7" className="main" target="_blank">
                    <img src={discord} className={styles["social"]} alt="Discord link"/>
                </a>
            </div>
        </div>
    );
}

export default Footer;
