import React from 'react'
import skincare from '../util/skincare'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import './styles/SkinCare.scss'
const SkinCare = () => {
  return (
    <div className='inner skincare-inner'>
      <div className="t-wrap">
        <h2 className="tit">
          Step into style
        </h2>
        <p className="txt">
          컨버즈(Conbuzz)는 기존의 제지 제조 중심 사업 구조에서 벗어나 <br />
          ICT(정보통신기술) 및 통신장비 사업으로 주력 사업을 전환하고 있는 코스피 상장 기업입니다
        </p>
        <a href="#" className="btn">
          meet converse
        </a>
      </div>
      <div className="slider-wrap">
        <div className="in">
          <Swiper 
          slidesPerView={2}
          spaceBetween={30}
          loop={true}
          className="skincare-slider">
            {skincare.map((sl)=>(

    <SwiperSlide 
  style={{ backgroundImage: `url('/img/000.png')` }} // 여기서 직접 경로를 지정합니다.
  key={sl.id} 
>
  <a href={sl.link}>
    {sl.id}
  </a>
</SwiperSlide>
            ))}

          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default SkinCare