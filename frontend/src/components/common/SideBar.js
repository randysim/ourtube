import React from "react";
import styles from "../../styles/components/sideBar.module.css";

export default class SideBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render = () => {
        return (
            <div className={styles.sideBar}></div>
        )
    }
}