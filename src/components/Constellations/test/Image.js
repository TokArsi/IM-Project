import Constellation from "../Constellation/Constellation";
import React from "react";

const starData = [
    { top: 36.49, left: 58.7,  url: '/images/constallation/stars/advert-connect/supervisor-press.png'},
    { top: 35.7, left: 146.21, url: '/images/constallation/stars/advert-connect/press-helper.png'},
    { top: 65.07, left: 262.23, url: '/images/constallation/stars/advert-connect/pr-manager.png'},
    { top: 164.79, left: 307.77, url: '/images/constallation/stars/advert-connect/speech-writer.png'},
    { top: 199.78, left: 200.44, url: '/images/constallation/stars/promotion/promotion.png'},
];

const lineData = [
    { top: 47.97, left: 69.96,  url: '/images/constallation/Image/line1.png'},
    { top: 47.97, left: 158.13, url: '/images/constallation/Image/line2.png'},
    { top: 75.36, left: 276.85, url: '/images/constallation/Image/line3.png'},
    { top: 170.9, left: 213.64, url: '/images/constallation/Image/line4.png'},
];

const constellationBlockSize = {
    width: 397.46, height: 227.23
}
const Image = () => {
    return (
        <div className={'brand-constellation'} style={{width: 397.46, height: 290.05}}>
            <Constellation starData={starData} parentSize={{width: 397.46, height: 290.05}} constellationBlockSize={constellationBlockSize} lineData={lineData}/>
        </div>
    )
}
export default Image;