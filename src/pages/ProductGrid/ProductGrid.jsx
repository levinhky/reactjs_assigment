import ProductList from "components/ProductList/ProductList";
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

  return (
    <div className={styles["wrapper"]}>
      <ProductList products={products} isNav={true} />

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
