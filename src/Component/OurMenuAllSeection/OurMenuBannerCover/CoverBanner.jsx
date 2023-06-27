import React from 'react';
import "./CoverBanner.css"
import { Parallax } from 'react-parallax';

const CoverBanner = ({ menuImg, title, pa }) => {
    return (
        // react parallax use kore hoicha 
        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={menuImg}
            bgImageAlt="the dog"
            strength={-200}
        >
            <div className="hero h-[650px]">
                <div className="hero-overlay bg-opacity-10"></div>
                <div className="hero-content text-center text-neutral-content bg-black bg-opacity-50 py-28 md:px-64">
                    <div className="max-w-md">

                        <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                        <p className="mb-5">{pa}</p>
                    </div>
                </div>
            </div>
        </Parallax>

    );
};

export default CoverBanner;