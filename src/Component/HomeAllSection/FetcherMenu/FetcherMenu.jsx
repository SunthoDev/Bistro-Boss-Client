import React from 'react';
import "./FetcherMenu.css"
import feature from "../../../assets/home/featured.jpg"

const FetcherMenu = () => {
    return (
        <div className='mt-20'>
            {/* aykana paralax kore hoicha (bg-fixed) deya...  importent --- paralax korta hola background ka fixed korta hova taholay hova */}

            <div className="feature bg-fixed ">

                <div className='parent  md:mx-32 mx-4 py-16 bg-black bg-opacity-20'>

                    <div className="title px-4 md:px-0 w-full md:w-1/4 mx-auto mb-6">
                        <p>---Should Try---</p>
                        <h3 className='text-white'>CHEF RECOMMENDS</h3>
                    </div>

                    <div className='md:flex items-center justify-center '>
                        <div className="img">
                            <img src={feature} alt="feature" />
                        </div>

                        <div className="div md:ml-10">
                            <h2 className='font-bold text-white'>March 20, 2023 <br />
                                <span>WHERE CAN I GET SOME?</span></h2>
                            <p className='text-white font-semibold'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.
                            </p>
                            <button className="reedMore">Read More</button>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default FetcherMenu;