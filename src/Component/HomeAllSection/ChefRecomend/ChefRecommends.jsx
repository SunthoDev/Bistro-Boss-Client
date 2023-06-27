import React, { useEffect, useState } from 'react';
import "./ChefRecommends.css"
import card1 from "../../../assets/home/slide2.jpg"
import card2 from "../../../assets/home/slide3.jpg"
import card3 from "../../../assets/home/slide3.jpg"



const ChefRecommends = () => {

    return (
        <div className="mt-14">

            <div className="title px-4 md:px-0 w-full md:w-1/4 mx-auto mb-6">
                <p>---Should Try---</p>
                <h3>CHEF RECOMMENDS</h3>
            </div>

            <div className="chefCard grid md:grid-cols-3 gap-5 mt-10">


                <div className="card w-full bg-[#F3F3F3] shadow-xl">
                    <img src={card1} alt="Shoes" className=" h-[300px]" />
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <button className="AddCaryButton">add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="card w-full bg-[#F3F3F3] shadow-xl">
                    <img src={card2} alt="Shoes" className=" h-[300px]" />
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <button className="AddCaryButton">add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="card w-full bg-[#F3F3F3] shadow-xl">
                    <img src={card3} alt="Shoes" className=" h-[300px]" />
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <button className="AddCaryButton">add to cart</button>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default ChefRecommends;