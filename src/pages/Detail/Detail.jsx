import axiosClient from "configs/api";
import { vnd } from "configs/functions";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import styles from "./Detail.module.css";

function Detail(props) {
  const { id } = useParams();

  const [productDetail, setProductDetail] = useState({});
  const [quantity, setQuantity] = useState(1);

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

  const quantityError = () => {
    toast.warning("Phải có ít nhất 1 sản phẩm!", {
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
                <button
                  type="button"
                  onClick={() => {
                    if (quantity > 1) {
                      setQuantity(quantity - 1);
                    } else {
                      quantityError();
                    }
                  }}
                >
                  -
                </button>
                <input
                  type="text"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
                <button type="button" onClick={() => setQuantity(quantity + 1)}>
                  +
                </button>
              </form>
              <div className={styles["add-cart"]}>
                <button onClick={addSuccess}>Thêm vào giỏ</button>
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
