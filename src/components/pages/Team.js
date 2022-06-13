import React from "react";
import styles from "./Team.module.css";
import Footer from "../footer/Footer";
import Header from "../header/Header";

const Team = () => {
    return (
        <div className={styles["page_wrapper"]}>
            <Header/>
            <div className={styles["section_wrapper"]}>
                <div className={styles["team_wrapper"]}>
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
                    ----------------------------------------
                    <p>
                        Jib &&<br/>
                        tech advisor<br/>
                        <a href="https://twitter.com/Jib0xD" className="main"
                           target="_blank">https://twitter.com/Jib0xD</a>
                    </p>
                    ----------------------------------------
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Team;