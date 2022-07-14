import styles from "./Detail.module.css";

function Detail(props) {
  return (
    <div className={styles["wrapper"]}>
      <div className={styles["box-right"]}>
        <div className={styles["image"]}>
          <img
            src="https://product.hstatic.net/1000370235/product/img_0022_0b194b7f49e346b9a0d63c2f0a3b5eaf_master.jpg"
            alt="yenyen"
          />
        </div>
      </div>
      <div className={styles["box-left"]}>
        <div className={styles["info"]}>
          <h2>Yeen yeen</h2>
          <div className={styles["price"]}>490,000₫</div>
          <div className={styles["status"]}>
            Trạng thái : <span>Còn hàng</span>
          </div>
          <div className={styles["desc"]}>Chưa có mô tả cho sản phẩm này</div>
        </div>
        <div className={styles["action"]}>
          <form>
            <button>-</button>
            <input type="text" defaultValue={25} />
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
  );
}

export default Detail;
