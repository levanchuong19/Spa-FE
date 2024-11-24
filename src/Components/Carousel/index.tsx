import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./index.scss";

export default function Carousel() {
  return (
    <div className="Carousel">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://theme.hstatic.net/200000622589/1000980055/14/x1_product_pagetodayimage.png?v=2100"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://duongsinhmattay.com/public/images/slide01.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://gcs.tripi.vn/public-tripi/tripi-feed/img/478984HWb/anh-mo-ta.png"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
