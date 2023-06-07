import Constellation from "../Constellation/Constellation";
import React from "react";

const starData = [
    { top: 71.08, left: 70.45,  url: '/images/constallation/stars/advert-connect/copywriter.png'},
    { top: 171.31, left: 92.66, url: '/images/constallation/stars/advert-connect/smm-manager.png'},
    { top: 5.56, left: 179.29, url: '/images/constallation/stars/digital-communications/digital.png'},
    { top: 276.63, left: 117.24, url: '/images/constallation/stars/digital-communications/digital.png'},
    { top: 287.79, left: 256.53, url: '/images/constallation/stars/advert-connect/content-producer.png'},
    { top: 149.87, left: 301.8, url: '/images/constallation/stars/advert-connect/content-manager.png'},
    { top: 147.48, left: 163.38, url: '/images/constallation/stars/advert-connect/content-marketolog.png'},
];

const lineData = [
    { top: 83.31, left: 84.31,  url: '/images/constallation/advert-creative/line1.png'},
    { top: 10, left: 98.87, url: '/images/constallation/advert-creative/line2.png'},
    { top: 175.04, left: 95.06, url: '/images/constallation/advert-creative/line3.png'},
    { top: 285, left: 123.6, url: '/images/constallation/advert-creative/line4.png'},
    { top: 161.99, left: 260.61, url: '/images/constallation/advert-creative/line5.png'},
    { top: 162.71, left: 178.73, url: '/images/constallation/advert-creative/line6.png'},
    { top: 84.31, left: 84.31, url: '/images/constallation/advert-creative/line7.png'},
];

const constellationBlockSize = {
    width: 411.08, height: 333.14
}
const AdvertCreativity = () => {
    return (
        <div className={'brand-constellation'} style={{width: 423.13, height: 365.21}}>
            <Constellation starData={starData} parentSize={{width: 423.13, height: 365.21}} constellationBlockSize={constellationBlockSize} lineData={lineData}/>
        </div>
    )
}
export default AdvertCreativity;