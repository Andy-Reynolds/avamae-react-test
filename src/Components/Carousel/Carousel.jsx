import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/scss";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Carousel.scss";
import homeImage from "../../assets/images/shutterstock_407632243.jpg";

const Carousel = ({ homeObj }) => {
  console.log(homeObj.Details);

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <img className="carousel__image" src={homeImage} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="carousel__image" src={homeImage} alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
