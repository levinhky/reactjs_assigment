import ProductList from "components/ProductList/ProductList";
import axiosClient from "configs/api";
import { useEffect, useState } from "react";
import styles from "./ProductGrid.module.css";

function ProductGrid(props) {
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

  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const getProductList = async () => {
      const data = await axiosClient.get("products");
      setProductList(data);
      console.log(data);
    };

    getProductList();
  }, []);

  return (
    <div className={styles["wrapper"]}>
      <ProductList products={productList} isNav={true} />

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
