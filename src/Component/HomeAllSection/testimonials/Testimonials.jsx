import React, { useEffect, useState } from 'react';
import "./Testimonials.css"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import iconSlider from "../../../assets/icon/quote-left 1.png"



const Testimonials = () => {

    let [review, setReview] = useState([])

    useEffect(() => {
        fetch("https://bistro-boss-project-server.vercel.app/review")
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])


    return (

        <div className='my-14'>

            <div className="title px-4 md:px-0 w-full md:w-1/4 mx-auto mb-6">
                <p>---What Our Clients Say---</p>
                <h3>TESTIMONIALS</h3>
            </div>


            <div className="slider mt-10">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                    {
                        review.map(review => <SwiperSlide key={review._id}>
                            <div className="Parent mx-14 flex flex-col items-center text-center">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <div className="img">
                                    <img src={iconSlider} alt="img" />
                                </div>
                                <p>{review.details}</p>
                                <h3>{review.name}</h3>

                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>



        </div>
    );
};

export default Testimonials;