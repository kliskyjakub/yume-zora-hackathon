import styles from "./SectionSeparator.module.css";
import React from "react";

const SectionSeparator = (props) => {
    return (
        <div className={styles["section_separator_wrapper"]}>
            <div className={styles["section_seperator"]}></div>
        </div>
    );
};

export default SectionSeparator;