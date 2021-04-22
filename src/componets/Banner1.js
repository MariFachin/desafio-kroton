import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import '../App.css';
import 'swiper/swiper.scss';

import imgblue1 from '../img/Group 2541.png';
import imgblue2 from '../img/Group 29.png';


function Banner1() {
  return (
    <>
      <div className="content-banner1">
          <section>
              <img src={imgblue1} alt="wpp" />
              <div className="banner1-text">
                <h2>Titulo 1</h2>
                <p>Content..  ... content. ... content.. .. content.. .. content .. 
                content.... content.... content.... content.... content....
                content.... content....</p>
                <button>Botão para detalhes....</button>
              </div>
          </section>
          <section>
              <img src={imgblue2} alt="wpp" />
              <div className="banner1-text">
                <h2>Titulo 1</h2>
                <p>Content..  ... content. ... content.. .. content.. .. content .. 
                content.... content.... content.... content.... content....
                content.... content....</p>
                <button>Botão para detalhes....</button>
              </div>
          </section>
      </div>
      <div className="mobile">
        <Swiper
          spaceBetween={40}
          slidesPerView={1}
        >
          <SwiperSlide>
            <section>
              <div className="wrap">
                <img src={imgblue1} alt="wpp" />
                <div className="banner1-text">
                  <h2>Titulo 1</h2>
                  <p>Content.. ... content. ... teste ....... content....content.... content....content....</p>
                </div>
              </div>
              <button>Botão para detalhes....</button>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section>
              <div className="wrap">
                <img src={imgblue2} alt="wpp" />
                <div className="banner1-text">
                  <h2>Titulo 1</h2>
                  <p>Content.. ... content. ... teste ....... content....content.... content....content....</p>
                </div>
              </div>
              <button>Botão para detalhes....</button>
            </section>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default Banner1;
