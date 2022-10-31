import { Outlet } from "react-router-dom";

import NavBar from "../common/NavBar.js";
import SideBar from "../common/SideBar.js";

import styles from "../../styles/global.module.css";

// combination of search + side bar
const MainLayout = () => (
    <div className={styles.mainWrapper}>
        <NavBar />
        <SideBar />
        <Outlet />
    </div>
);

export default MainLayout;