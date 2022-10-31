import { Outlet } from "react-router-dom";

import styles from "../../styles/global.module.css";

const DefaultLayout = () => (
    <div className={styles.mainWrapper}>
        <Outlet />
    </div>
);

export default DefaultLayout;