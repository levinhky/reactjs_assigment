import axiosClient from "configs/api";
import { vnd } from "configs/functions";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { addToCart, caculateTotal } from "slices/cartSlice";
import styles from "./Detail.module.css";

function Detail(props) {
  const { id } = useParams();

  const [productDetail, setProductDetail] = useState({});

  const dispath = useDispatch();

  const { cartItems } = useSelector((state) => state.cart);

  useEffect(() => {
    dispath(caculateTotal());
  }, [cartItems]);

  useEffect(() => {
    const getProductDetail = async () => {
      const data = await axiosClient.get("products", { params: { id: id } });
      setProductDetail(data[0]);
    };

    getProductDetail();
  }, [id]);

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const addSuccess = () => {
    toast.success("Thêm vào giỏ hàng thành công!", {
      position: "top-right",
      autoClose: 300,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

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
                <button type="button">-</button>
                <input type="text" defaultValue={1} />
                <button type="button">+</button>
              </form>
              <div className={styles["add-cart"]}>
                <button
                  onClick={() => {
                    dispath(addToCart(productDetail));
                    addSuccess();
                  }}
                >
                  Thêm vào giỏ
                </button>
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
