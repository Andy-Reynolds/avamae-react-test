import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/scss";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Carousel.scss";
import Button from "../Button/Button";

const Carousel = ({ homeObj }) => {
  const swiperSlides = homeObj.Details.map((item) => (
    <SwiperSlide>
      <div className="carousel__slide">
        <div className="carousel__gradient">
          <div className="carousel__content">
            <h2 className="carousel__title">{item.Title}</h2>
            <h3 className="carousel__subtitle">{item.Subtitle}</h3>
            <Button buttonLink={"/contact"} buttonText={"Contact Us"} />
          </div>
        </div>
        <img className="carousel__image" src={item.ImageUrl} alt="" />
      </div>
    </SwiperSlide>
  ));

  return (
    <Swiper
      className="carousel"
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    >
      {swiperSlides}
    </Swiper>
  );
};

export default Carousel;
