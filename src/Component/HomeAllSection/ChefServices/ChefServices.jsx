import React from 'react';
import "./ChefServices.css"
import chef from"../../../assets/home/chef-service.jpg"

const ChefServices = () => {
    return (
        <div className='mt-14'>

            <div className="item">
                <div className="img">
                    <img src={chef} alt="" />
                    <div className="text mx-8 md:mx-20" >
                        <h2>Bistro Boss</h2>
                        <p className="px-4 md:px-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default ChefServices;