import Constellation from "../Constellation/Constellation";
import React from "react";
import './style-files/constellationbranddevelopment.scss'

const starData = [
    { top: 130.67, left: 61.26,  url: '/images/constallation/brand-development/star-brand.png', title: {top: 97.85, left: 0, text: 'Influence-<br>маркетолог'} },
    { top: 39.94, left: 157.65, url: '/images/constallation/brand-development/business-developer.png', title: {top: 3.49, left: 101.48, text: 'Бизнес-девелопер'} },
    { top: 33.4, left: 227.52, url: '/images/constallation/brand-development/star-brand.png', title: {top: 0, left: 227.63, text: 'Бренд-стратег'} },
    { top: 19.05, left: 397.76, url: '/images/constallation/brand-development/star-brand.png', title: {top: 9.18, left: 426.09, text: 'Бренд-менеджер'} },
    { top: 95.59, left: 322.98, url: '/images/constallation/brand-development/star-brand.png', title: {top: 81.24, left: 351.39, text: 'Специалист по управлению репутацией бренда'} },
];

const lineData = [
    { top: 50.51, left: 71.63,  url: '/images/constallation/brand-development/line.png' },
    { top: 44.75, left: 168.42, url: '/images/constallation/brand-development/line2.png' },
    { top: 45.64, left: 236.56, url: '/images/constallation/brand-development/line3.png' },
    { top: 30.34, left: 236.56, url: '/images/constallation/brand-development/line4.png' },
];

const constellationBlockSize = {
    width: 488.09,
    height: 152.71
}
const BrandConstellation = () => {
    return (
        <div className={'brand-development-constellation'} style={{width: 488.09, height: 222.95}}>
            <div className="title">«Созвездие развития бренда»</div>
            <div className="sub-title">Создают успешные продукты под узнаваемым брендом</div>
            <Constellation starData={starData} parentSize={{x: 488.09, y: 222.95}} constellationBlockSize={constellationBlockSize} lineData={lineData}/>
        </div>
    )
}
export default BrandConstellation;