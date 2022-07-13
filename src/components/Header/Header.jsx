import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header(props) {
  return (
    <div className={styles["wrapper"]}>
      <div className={styles["inner"]}>
        <Link className={styles["logo"]} to="/">
          <img
            src="https://theme.hstatic.net/1000370235/1000472578/14/logo.png?v=837"
            alt="shebyshi_logo"
          />
        </Link>
        <ul className={styles["menu"]}>
          <li>
            <a href="/">New Arrivals</a>
          </li>
          <li>
            <a href="/">Products</a>
          </li>
          <li>
            <a href="/">Best seller</a>
          </li>
          <li>
            <a href="/">Đăng ký / đăng nhập</a>
          </li>
          <li>
            <a className={styles["action"]} href="/">
              <i className="bx bx-search"></i>
            </a>
          </li>
          <li>
            <a className={`${styles["action"]} ${styles["cart"]}`} href="/">
              <i className="bx bx-cart"></i>
              <span className={styles["cart-count"]}>0</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
