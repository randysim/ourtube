import React from "react";
import { Helmet } from "react-helmet";

import styles from "../styles/global.module.css";

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render = () => {
        return (
            <div className={styles.mainLayoutWrapper}>
                <Helmet>
                    <title>OurTube</title>
                </Helmet>
            </div>
        )
    }
}