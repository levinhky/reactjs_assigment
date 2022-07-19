import ProductList from "components/ProductList/ProductList";
import axiosClient from "configs/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./ProductGrid.module.css";

function ProductGrid(props) {
  const [productList, setProductList] = useState([]);

  const { category } = useParams();

  useEffect(() => {
    const getProductList = async () => {
      let data = null;
      if (category === "all") {
        data = await axiosClient.get("products");
      } else if (category === "new-arrivals") {
        data = await axiosClient.get("products", {
          params: { _sort: "name", _order: "asc" },
        });
      } else if (category === "hot-products") {
        data = await axiosClient.get("products", {
          params: { q: "hot-product" },
        });
      } else {
        data = await axiosClient.get("products", {
          params: { category_id: +category },
        });
      }
      setProductList(data);
    };

    getProductList();
  }, [category]);

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
