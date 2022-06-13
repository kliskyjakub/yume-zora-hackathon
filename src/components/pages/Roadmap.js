import styles from "./Roadmap.module.css";
import React from "react";
import {Link} from "react-router-dom";
import logo from "../../media/sun.gif";
import graphic from "../../media/graphic.webp";
import Footer from "../footer/Footer";
import SectionSeparator from "../sectionSeparator/SectionSeparator";
import Header from "../header/Header";

const Roadmap = () => {
    return (
        <div className={styles["page_wrapper"]}>
            <Header/>
            <div className={styles["section_wrapper"]}>
                <div className={styles["roadmap_wrapper"]}>
                    Every step we will take will be to achieve the vision of a free fashion industry.<br/>
                    A fashion industry not chained down by large money hungry companies.<br/><br/><br/>
                    <div className={styles["phase_wrapper"]}>
                        phase #1<br/><br/>
                        ai generating of (yume.first) collectibles<br/>
                        diamond hand community build up<br/>
                        collectibles smart contract development<br/>
                        frontend development
                    </div>
                    <div className={styles["phase_connector"]}></div>
                    <div className={styles["phase_wrapper"]}>
                        phase #2<br/><br/>
                        (yume.first) collectibles drop<br/>
                        (yume.essentials) designs creation<br/>
                        auto-discount smart contract development<br/>
                        smart contract development for the redemption of the designs
                    </div>
                    <div className={styles["phase_connector"]}></div>
                    <div className={styles["phase_wrapper"]}>
                        phase #3<br/><br/>
                        testing & audit
                    </div>
                    <div className={styles["phase_connector"]}></div>
                    <div className={styles["phase_wrapper"]}>
                        phase #4<br/><br/>
                        (yume.essentials) designs drop<br/>
                        redemption and auto-discount smart contract deployment<br/>
                    </div>
                    <div className={styles["phase_connector"]}></div>
                    <div className={styles["phase_wrapper"]}>
                        phase #5<br/><br/>
                        DAO<br/>
                        marketplace for independent creators<br/>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    );
};

export default Roadmap;