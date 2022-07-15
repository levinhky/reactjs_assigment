import { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header(props) {
  useEffect(() => {
    const searchBtn = document.querySelector(".search-btn");
    const searchBox = document.querySelector(".search-box");

    const toggleSearch = () => {
      searchBox.classList.toggle(`${styles["active"]}`);
    };

    searchBtn.addEventListener("click", toggleSearch);
  }, []);

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
          <li className={styles["dropdown"]}>
            <Link to="/collections/all">Products</Link>
            <ul className={styles["sub-menu"]}>
              <li>
                <a href="/">Áo</a>
              </li>
              <li>
                <a href="/">Váy</a>
              </li>
              <li>
                <a href="/">Quần</a>
              </li>
              <li>
                <a href="/">Đầm</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/">Best seller</a>
          </li>
          <li>
            <Link to="/account/login">Đăng ký / đăng nhập</Link>
          </li>
          <li className={styles["search-btn"]}>
            <button className={`${styles["action"]} search-btn`}>
              <i className="bx bx-search"></i>
            </button>
            <div className={`${styles["search-box"]} search-box`}>
              <form>
                <input type="text" placeholder="Tìm kiếm..." />
                <button>
                  <i className="bx bx-search"></i>
                </button>
              </form>
            </div>
          </li>
          <li>
            <Link
              className={`${styles["action"]} ${styles["cart"]}`}
              to="/cart"
            >
              <i className="bx bx-cart"></i>
              <span className={styles["cart-count"]}>0</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
