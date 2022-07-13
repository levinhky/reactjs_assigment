import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Lazy, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/lazy";

import styles from "./Home.module.css";

function Home(props) {
  const arrivals = [
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

  SwiperCore.use([Autoplay, Navigation]);

  const slides = [
    {
      id: 1,
      img: "https://theme.hstatic.net/1000370235/1000472578/14/slideshow_1.jpg?v=837",
      alt: "slide_1",
    },
    {
      id: 2,
      img: "https://theme.hstatic.net/1000370235/1000472578/14/slideshow_2.jpg?v=837",
      alt: "slide_2",
    },
    {
      id: 3,
      img: "https://theme.hstatic.net/1000370235/1000472578/14/slideshow_3mb.jpg?v=837",
      alt: "slide_3",
    },
  ];
  return (
    <>
      <div className={styles["carousel"]}>
        <Swiper
          navigation
          modules={[Autoplay, Lazy, Navigation]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          grabCursor={true}
          spaceBetween={0}
          slidesPerView={1}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <img src={slide.img} alt={slide.alt} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={styles["container"]}>
        <div className={styles["model"]}>
          <div className={styles["item"]}>
            <a href="/">
              <img
                src="https://theme.hstatic.net/1000370235/1000472578/14/xxx_4.jpg?v=837"
                alt="tops"
              />
            </a>
            <div className={styles["caption"]}>
              <h3>Tops</h3>
              <p>Mua Ngay</p>
            </div>
          </div>
          <div className={styles["item"]}>
            <a href="/">
              <img
                src="https://theme.hstatic.net/1000370235/1000472578/14/xxx_5.jpg?v=837"
                alt="tops"
              />
            </a>
            <div className={styles["caption"]}>
              <h3>Desses</h3>
              <p>Mua Ngay</p>
            </div>
          </div>
        </div>

        <div className={styles["title"]}>
          <h1 className={styles["title-heading"]}>New arrivals</h1>
        </div>

        <div className={styles["arrivals"]}>
          {arrivals.map((arrival) => (
            <div className={styles["item"]} key={arrival.id}>
              <a href="/" className={styles["image"]}>
                <img src={arrival.src} alt="product" />
              </a>
              <div className={styles["info"]}>
                <h2 className={styles["name"]}>
                  <a href="/">Yeen Yeen</a>
                </h2>
                <div className={styles["price"]}>
                  <span>590,000₫</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles["title"]}>
          <h1 className={styles["title-heading"]}>Treat your inbox</h1>
        </div>
      </div>
    </>
  );
}

export default Home;
