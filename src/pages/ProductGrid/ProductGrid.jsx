import ProductList from "components/ProductList/ProductList";
import axiosClient from "configs/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./ProductGrid.module.css";

function ProductGrid(props) {
  const [productList, setProductList] = useState([]);
  const [limit, setLimit] = useState(8);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  const { category } = useParams();

  const pageNumbers = Array.from({ length: totalPages }, (v, i) => i + 1);

  useEffect(() => {
    const getProductList = async () => {
      let data = null;
      if (category === "all") {
        data = await axiosClient.get("products", {
          params: { _page: page, _limit: limit },
        });
      } else if (category === "new-arrivals") {
        data = await axiosClient.get("products", {
          params: { _page: page, _limit: limit, _sort: "name", _order: "asc" },
        });
      } else if (category === "hot-products") {
        data = await axiosClient.get("products", {
          params: { _page: page, _limit: limit, q: "hot-product" },
        });
      } else {
        data = await axiosClient.get("products", {
          params: { _page: page, _limit: limit, category_id: +category },
        });
      }

      setTotalPages(Math.ceil(data.pagination._totalRows / limit));
      setProductList(data.data);
    };

    getProductList();
  }, [category, limit, page]);

  return (
    <div className={styles["wrapper"]}>
      <ProductList
        products={productList}
        isNav={true}
        page={page}
        limit={limit}
        setProductList={setProductList}
      />

      <div className={styles["product-pagination"]}>
        <ul>
          {pageNumbers.map((number, index) => (
            <li key={index}>
              <button
                className={number === page ? styles["active"] : ""}
                onClick={() => {
                  setPage(number);
                  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  });
                }}
              >
                {number}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProductGrid;
