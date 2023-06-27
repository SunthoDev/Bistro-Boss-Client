import React from 'react';
import "./OrderOnline.css"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper";

import slider1 from "../../../assets/home/slide1.jpg"
import slider2 from "../../../assets/home/slide2.jpg"
import slider3 from "../../../assets/home/slide3.jpg"
import slider4 from "../../../assets/home/slide4.jpg"
import slider5 from "../../../assets/home/slide5.jpg"

const OrderOnline = () => {
    return (
        <div className='mt-14'>
            <div className="title px-4 md:px-0 w-full md:w-1/4 mx-auto mb-6">
                <p>---From 11:00am to 10:00pm---</p>
                <h3>ORDER ONLINE</h3>
            </div>

            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide><img src={slider1} alt="img" />
                    <h3 className='text-4xl uppercase text-center -mt-10 text-[#FFFFFF]'>Salad</h3>
                </SwiperSlide>
                <SwiperSlide><img src={slider2} alt="img" />
                    <h3 className='text-4xl uppercase text-center -mt-10 text-[#FFFFFF]'>Pizza</h3>
                </SwiperSlide>
                <SwiperSlide><img src={slider3} alt="img" />
                    <h3 className='text-4xl uppercase text-center -mt-10 text-[#FFFFFF]'>Soups</h3>
                </SwiperSlide>
                <SwiperSlide><img src={slider4} alt="img" />
                    <h3 className='text-4xl uppercase text-center -mt-10 text-[#FFFFFF]'>Desserts</h3>
                </SwiperSlide>
                <SwiperSlide><img src={slider5} alt="img" />
                    <h3 className='text-4xl uppercase text-center -mt-10 text-[#FFFFFF]'>Salad</h3>
                </SwiperSlide>
                <SwiperSlide><img src={slider1} alt="img" />
                    <h3 className='text-4xl uppercase text-center -mt-10 text-[#FFFFFF]'>Salad</h3>
                </SwiperSlide>
                <SwiperSlide><img src={slider2} alt="img" />
                    <h3 className='text-4xl uppercase text-center -mt-10 text-[#FFFFFF]'>Pizza</h3>
                </SwiperSlide>
                <SwiperSlide><img src={slider3} alt="img" />
                    <h3 className='text-4xl uppercase text-center -mt-10 text-[#FFFFFF]'>Soups</h3>
                </SwiperSlide>
                <SwiperSlide><img src={slider4} alt="img" />
                    <h3 className='text-4xl uppercase text-center -mt-10 text-[#FFFFFF]'>Desserts</h3>
                </SwiperSlide>
                <SwiperSlide><img src={slider5} alt="img" />
                    <h3 className='text-4xl uppercase text-center -mt-10 text-[#FFFFFF]'>Salad</h3>
                </SwiperSlide>
            </Swiper>

        </div>
    );
};

export default OrderOnline;