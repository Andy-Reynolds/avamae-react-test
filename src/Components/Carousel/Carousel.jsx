import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/scss";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Carousel.scss";
import Button from "../Button/Button";
// import { Link } from "react-router-dom";
// import homeImage from "../../assets/images/shutterstock_407632243.jpg";

const Carousel = ({ homeObj, buttonLink, buttonText }) => {
  // console.log(homeObj.Details[0].Title);

  return (
    <Swiper
      className="carousel"
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <div className="carousel__slide">
          <div className="carousel__gradient">
            <div className="carousel__content">
              <h2 className="carousel__title">{homeObj.Details[0].Title}</h2>
              <h3 className="carousel__subtitle">
                {homeObj.Details[0].Subtitle}
              </h3>
              <Button buttonLink={"/contact"} buttonText={"Contact Us"} />
            </div>
          </div>
          <img
            className="carousel__image"
            src={homeObj.Details[0].ImageUrl}
            alt=""
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="carousel__slide">
          <div className="carousel__gradient">
            <div className="carousel__content">
              <h2 className="carousel__title">{homeObj.Details[1].Title}</h2>
              <h3 className="carousel__subtitle">
                {homeObj.Details[1].Subtitle}
              </h3>
              <Button buttonLink={"/contact"} buttonText={"Contact Us"} />
            </div>
          </div>
          <img
            className="carousel__image"
            src={homeObj.Details[1].ImageUrl}
            alt=""
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
