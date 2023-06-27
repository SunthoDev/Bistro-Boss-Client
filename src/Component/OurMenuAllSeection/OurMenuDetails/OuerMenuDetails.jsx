import React from 'react';
import "./OurMenuDetails.css"

const OuerMenuDetails = ({item}) => {

    let {recipe,price,name,image}=item
    
    return (
        <div className=''>

            <div className='AllItems'>
                <div className="item flex items-center">
                    <div className="left">
                        <img src={image} alt="" />
                    </div>
                    <div className="right flex">
                        <div className="info">
                            <h2>{name}------------------</h2>
                            <p>{recipe}</p>
                        </div>
                        <h4>$ {price}</h4>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default OuerMenuDetails;