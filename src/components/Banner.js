import React from 'react';
import homeimage from '../images/homeimage.png'
import {TransformWrapper,TransformComponent} from 'react-zoom-pan-pinch';
const Banner = () => {
    return (
        <div>
            <TransformWrapper >
                <TransformComponent >
                    <div className="wrapper">
                    <img  src={homeimage} alt="homeimage" className='BannerImage'></img>
                    </div>
                </TransformComponent>
            </TransformWrapper>
        </div>
    );
};

export default Banner;