import React from "react";
import styles from "../../styles/components/navBar.module.css";

import MenuIcon from "@mui/icons-material/Menu";
import { TextField, Button } from "@mui/material";

import { Link } from "react-router-dom";

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render = () => {
        return (
            <div className={styles.navBar}>
                <div className={styles.lrContainer}>
                    <MenuIcon style={{ color: 'white', cursor: 'pointer', width: '30px', height: '30px' }} />
                </div>
                <div className={styles.centerContainer}>
                    <TextField 
                        className={styles.searchBar} 
                        sx={{ input: { color: 'white' }, label: { color: 'gray'}}} 
                        id="filled-basic" 
                        label="Search" 
                        variant="filled" 
                    />
                </div>
                <div className={`${styles.lrContainer} ${styles.right}`}>
                    <Link to="/login">
                        <Button className={styles.loginButton} style={{ marginRight: '30px' }} variant="outlined">Login</Button>
                    </Link>
                </div>
            </div>
        )
    }
}