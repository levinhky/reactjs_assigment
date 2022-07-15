import styles from "./Login.module.css";

function Login(props) {
  return (
    <div className={styles["wrapper"]}>
      <div className={styles["social-login"]}>
        <h4>Đăng nhập bằng</h4>
        <div className={styles["method"]}>
          <button>Facebook</button>
          <button>Google</button>
        </div>
      </div>

      <div className={styles["line"]}>
        <span>Hoặc</span>
      </div>

      <div className={styles["account-login"]}>
        <div className={styles["login-form"]}>
          <h1 className={styles["title"]}>Đăng nhập</h1>
          <div className={styles["form"]}>
            <form action="">
              <div className={styles["form-group"]}>
                <i className="bx bxs-envelope"></i>
                <input type="email" placeholder="Email của bạn" />
              </div>
              <div className={styles["form-group"]}>
                <i className="bx bxs-lock"></i>
                <input type="text" placeholder="Nhập mật khẩu" />
              </div>
              <div
                className={`${styles["form-group"]} ${styles["form-group-bottom"]}`}
              >
                <button>Đăng nhập</button>
                <a href="/" className={styles["forgot"]}>
                  Quên mật khẩu?
                </a>
              </div>
            </form>
          </div>
        </div>
        <div className={styles["register-form"]}>
          <h1 className={styles["title"]}>Đăng ký thành viên mới</h1>
          <div className={styles["form"]}>
            <form action="">
              <div className={styles["form-group"]}>
                <i className="bx bxs-user"></i>
                <input type="text" placeholder="Họ tên " />
              </div>
              <div className={styles["form-group"]}>
                <i className="bx bxs-envelope"></i>
                <input type="email" placeholder="Email " />
              </div>
              <div className={styles["form-group"]}>
                <i className="bx bxs-lock"></i>
                <input type="text" placeholder="Mật khẩu" />
              </div>
              <div
                className={`${styles["form-group"]} ${styles["form-group-bottom"]}`}
              >
                <button>Đăng ký</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
