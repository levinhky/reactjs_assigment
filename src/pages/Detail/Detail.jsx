import axiosClient from "configs/api";
import { vnd } from "configs/functions";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";

function Detail(props) {
  const { id } = useParams();

  const [productDetail, setProductDetail] = useState({});

  useEffect(() => {
    const getProductDetail = async () => {
      const data = await axiosClient.get("products", { params: { id: id } });
      setProductDetail(data[0]);
    };

    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    getProductDetail();
  }, [id]);
  return (
    <>
      {productDetail && (
        <div className={styles["wrapper"]}>
          <div className={styles["box-right"]}>
            <div className={styles["image"]}>
              <img src={productDetail.thumbnail} alt={productDetail.name} />
            </div>
          </div>
          <div className={styles["box-left"]}>
            <div className={styles["info"]}>
              <h2>{productDetail.name}</h2>
              <div className={styles["price"]}>{vnd(productDetail.price)}</div>
              <div className={styles["status"]}>
                Trạng thái : <span>Còn hàng</span>
              </div>
              <div className={styles["desc"]}>
                Chưa có mô tả cho sản phẩm này
              </div>
            </div>
            <div className={styles["action"]}>
              <form>
                <button>-</button>
                <input type="text" defaultValue={1} />
                <button>+</button>
              </form>
              <div className={styles["add-cart"]}>
                <a href="/">Thêm vào giỏ</a>
              </div>
            </div>
            <div className={styles["addtion"]}>
              <div className={styles["product-id"]}>
                Mã sản phẩm : <span>250702</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Detail;
