import React from 'react';
// import Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';

const Slider = ({singleImage, arrayImages, options}) => {
  return (
    <div className={"slider"}>
      {arrayImages?.length > 0
          ? <Swiper
              slidesPerView={1}
              pagination={{
                clickable: true,
              }}
              loop
              modules={[Pagination]}
              className={"c-product-slider"}
            >
              {arrayImages.map(img => {
                  return <SwiperSlide key={img}>
                    <img className={"c-product-img"} src={img} alt={"Фотография"} />
                  </SwiperSlide>
                }) }
            </Swiper>
          : <img className={"c-product-img"} src={singleImage} alt={"Фотография"} />
      }
    </div>
  );
};

export default Slider;