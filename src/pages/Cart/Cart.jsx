import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./Cart.module.css";

function Cart(props) {
  console.log(useSelector((state) => state));
  const [quantity, setQuantity] = useState(1);
  return (
    <div className={styles["wrapper"]}>
      <div className={styles["title"]}>
        <h1 className={styles["title-heading"]}>Giỏ hàng</h1>
      </div>

      {/* <div className={styles["cart"]}>
        <div className={styles["left"]}>
          <div className={styles["items"]}>
            <table>
              <tbody>
                <tr>
                  <th>Sản phẩm</th>
                  <th>Số lượng</th>
                  <th>Tổng tiền</th>
                  <th>Xóa</th>
                </tr>
                <tr className={styles["item"]}>
                  <td>
                    <a href="/">
                      <div className={styles["product"]}>
                        <img
                          src="https://product.hstatic.net/1000370235/product/img_0022_0b194b7f49e346b9a0d63c2f0a3b5eaf_medium.jpg"
                          alt="product"
                        />
                        <div className={styles["info"]}>
                          <h4>Yeen yeen</h4>
                          <span>490,000₫</span>
                        </div>
                      </div>
                    </a>
                  </td>
                  <td className={styles["qty"]}>
                    <div className={styles["qty-number"]}>
                      <input
                        type="button"
                        value="<"
                        className={styles["qtyminus"]}
                        onClick={() => {
                          if (quantity > 1) {
                            setQuantity(quantity - 1);
                          } else {
                            return;
                          }
                        }}
                      />
                      <input
                        type="text"
                        name="quantity"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                      />
                      <input
                        type="button"
                        value=">"
                        className={styles["qtyplus"]}
                        onClick={() => setQuantity(quantity + 1)}
                      />
                    </div>
                  </td>
                  <td>
                    <b>490,000₫</b>
                  </td>
                  <td>
                    <span>
                      <i className="bx bx-trash"></i>
                    </span>
                  </td>
                </tr>

                <tr className={styles["item"]}>
                  <td>
                    <a href="/">
                      <div className={styles["product"]}>
                        <img
                          src="https://product.hstatic.net/1000370235/product/img_0022_0b194b7f49e346b9a0d63c2f0a3b5eaf_medium.jpg"
                          alt="product"
                        />
                        <div className={styles["info"]}>
                          <h4>Yeen yeen</h4>
                          <span>490,000₫</span>
                        </div>
                      </div>
                    </a>
                  </td>
                  <td className={styles["qty"]}>
                    <div className={styles["qty-number"]}>
                      <input
                        type="button"
                        value="<"
                        className={styles["qtyminus"]}
                      />
                      <input type="text" name="quantity" defaultValue={1} />
                      <input
                        type="button"
                        value=">"
                        className={styles["qtyplus"]}
                      />
                    </div>
                  </td>
                  <td>
                    <b>490,000₫</b>
                  </td>
                  <td>
                    <span>
                      <i className="bx bx-trash"></i>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className={styles["right"]}>
          <div className={styles["caculate"]}>
            <div className={styles["box"]}>
              <div className={styles["total-cart"]}>
                <div className={styles["sub-total"]}>
                  <span>Tổng tiền</span>
                  <span>980,000₫</span>
                </div>
                <div className={styles["pay"]}>
                  <a href="/">Thanh toán</a>
                </div>
              </div>
              <div className={styles["note-item"]}>
                <label>Ghi chú</label>
                <textarea placeholder="Bạn muốn mô tả rõ hơn về đơn hàng..."></textarea>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className={styles["empty-cart"]}>
        <div>
          <img
            src="https://theme.hstatic.net/1000370235/1000472578/14/empty_cart.png?v=837"
            alt="empty_cart"
          />
        </div>
        <p>Không có sản phẩm nào trong giỏ hàng của bạn!</p>
        <div className={styles["continue-btn"]}>
          <Link to="/collections/all">Tiếp tục mua hàng</Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
