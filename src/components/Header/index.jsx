import React from "react";

// Styles
import styles from "./styles.module.css";

// Assets
import IgniteLogo from "../../assets/logo/ignite.svg"

console.log(IgniteLogo)

export function Header () {
    return <>
        <header className={styles.header}>
            <img src={IgniteLogo} alt="Ignite Feed Logo" />
        </header>
    </>
}