import { Link, Outlet } from "umi";
import styles from "./index.less";

export default function Layout() {
  return (
    <div className={styles.navs}>
      <h2>sub umi</h2>
      <Outlet />
    </div>
  );
}
