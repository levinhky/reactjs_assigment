import axiosClient from "configs/api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header(props) {
  const [categories, setCategories] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  // api
  useEffect(() => {
    const getCategories = async () => {
      const data = await axiosClient.get("categories");
      setCategories(data);
    };

    getCategories();
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
            <Link to="/collections/new-arrivals">New Arrivals</Link>
          </li>
          <li className={styles["dropdown"]}>
            <Link to="/collections/all">Products</Link>
            <ul className={styles["sub-menu"]}>
              {categories &&
                categories.map((category) => (
                  <li key={category.id}>
                    <Link to={`/collections/${category.id}`}>
                      {category.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </li>
          <li>
            <Link to="/collections/hot-products">Best seller</Link>
          </li>
          <li>
            <Link to="/account/login">Đăng ký / đăng nhập</Link>
          </li>
          <li className={styles["search-btn"]}>
            <button
              className={`${styles["action"]} search-btn`}
              onClick={() => setIsOpen(!isOpen)}
            >
              <i className="bx bx-search"></i>
            </button>
            {isOpen && (
              <div className={`${styles["search-box"]} search-box`}>
                <form>
                  <input type="text" placeholder="Tìm kiếm..." />
                  <button>
                    <i className="bx bx-search"></i>
                  </button>
                </form>
              </div>
            )}
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
