import { useEffect } from "react";
import styles from "./ProductGrid.module.css";

function ProductGrid(props) {
  const products = [
    {
      id: 1,
      src: "https://product.hstatic.net/1000370235/product/img_2775_c36eb92deb1243e0936cccc9ff92d0cd_grande.jpg",
      alt: "product",
      name: "Yeen Yeen",
      price: 250702,
    },
    {
      id: 2,
      src: "https://product.hstatic.net/1000370235/product/img_0032_d96ba523f20c44cbad0495462a14fc93_grande.jpg",
      alt: "product",
      name: "Yeen Yeen",
      price: 250702,
    },
    {
      id: 3,
      src: "https://product.hstatic.net/1000370235/product/img_0032_d96ba523f20c44cbad0495462a14fc93_grande.jpg",
      alt: "product",
      name: "Yeen Yeen",
      price: 250702,
    },
    {
      id: 4,
      src: "https://product.hstatic.net/1000370235/product/img_0032_d96ba523f20c44cbad0495462a14fc93_grande.jpg",
      alt: "product",
      name: "Yeen Yeen",
      price: 250702,
    },
  ];

  const paginations = [
    {
      value: 1,
    },
    {
      value: 2,
    },
    {
      value: 3,
    },
  ];

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
    <div className={styles["wrapper"]}>
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

      <div className={styles["product-grid"]}>
        {products.map((product) => (
          <div className={styles["item"]} key={product.id}>
            <a href="/" className={styles["image"]}>
              <img src={product.src} alt="product" />
            </a>
            <div className={styles["info"]}>
              <h2 className={styles["name"]}>
                <a href="/">Yeen Yeen</a>
              </h2>
              <div className={styles["price"]}>
                <span>590,000₫</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles["product-pagination"]}>
        <ul>
          {paginations.map((pagination, index) => (
            <li key={index}>
              <a href="/">{pagination.value}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProductGrid;
