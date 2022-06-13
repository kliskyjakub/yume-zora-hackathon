import React from "react";
import styles from "./Header.module.css";
import SectionSeparator from "../sectionSeparator/SectionSeparator"
import {Link} from "react-router-dom";
import logo from "../../media/sun.gif";

const Header = (props) => {
    return (
        <div className={styles["header_wrapper"]}>
            <a href="https://yiume.eu" className="main">
                <img src={logo} className={styles["gif_invert"]} alt="Rotating yume logo"/>
                .*^/yume\^*.
            </a>
            <SectionSeparator/>

            <div>
                <Link to="/" style={{
                    display: 'inline', paddingLeft: '15px',
                    paddingRight: '15px'
                }}>Home</Link>
                <Link to="/dashboard" style={{
                    display: 'inline', paddingLeft: '15px',
                    paddingRight: '15px'
                }}>Dashboard</Link>
            </div>

            <div style={{marginTop:'15px'}}>
                <Link to="/team" style={{
                    display: 'inline', paddingLeft: '15px',
                    paddingRight: '15px'
                }}>Team</Link>
                <Link to="/roadmap" style={{
                    display: 'inline', paddingLeft: '15px',
                    paddingRight: '15px'
                }}>Roadmap</Link>
                <Link to="/docs" style={{
                    display: 'inline', paddingLeft: '15px',
                    paddingRight: '15px'
                }}>Docs</Link>
            </div>

            <SectionSeparator/>
        </div>
    );
};

export default Header;