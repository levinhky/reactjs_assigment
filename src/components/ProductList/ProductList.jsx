import { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./ProductList.module.css";

function ProductList(props) {
  const { products, isNav } = props;
  useEffect(() => {
    const filter = document.querySelector(".current");
    const filterSelect = document.querySelector(".select");
    const options = document.querySelectorAll(".option");

    const openSelect = () => {
      filterSelect.classList.toggle(`${styles["active"]}`);
    };

    const closeSelect = () => {
      filterSelect.classList.remove(`${styles["active"]}`);
    };

    filter.addEventListener("click", openSelect);

    options.forEach((option) => {
      option.addEventListener("click", closeSelect);
    });

    return () => {
      filter.removeEventListener("click", openSelect);
      options.forEach((option) => {
        option.removeEventListener("click", closeSelect);
      });
    };
  }, []);

  return (
    <>
      {isNav && (
        <nav>
          <div className={styles["title"]}>Lọc sản phẩm</div>
          <div className={styles["filter"]}>
            <label>Sắp xếp theo:</label>
            <span className={`${styles["filter-box"]} current`}>
              Sản phẩm nổi bật
            </span>
            <ul className={`${styles["filter-select"]} select`}>
              <li className={`${styles["option"]} option`}>Sản phẩm nổi bật</li>
              <li className={`${styles["option"]} option`}>Giá : Tăng dần</li>
              <li className={`${styles["option"]} option`}>Giá : Giảm dần</li>
              <li className={`${styles["option"]} option`}>Tên : A-Z</li>
              <li className={`${styles["option"]} option`}>Tên : Z-A</li>
            </ul>
          </div>
        </nav>
      )}

      <div className={styles["product-grid"]}>
        {products.map((product) => (
          <div className={styles["item"]} key={product.id}>
            <Link to={`/products/${product.id}`} className={styles["image"]}>
              <img src={product.src} alt="product" />
            </Link>
            <div className={styles["info"]}>
              <h2>
                <Link to={`/products/${product.id}`} className={styles["name"]}>
                  Yeen Yeen
                </Link>
              </h2>
              <div className={styles["price"]}>
                <span>590,000₫</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductList;
