import Constellation from "../Constellation/Constellation";
import React, {useContext, useEffect} from "react";
import './style-files/constellationbranddevelopment.scss'
import nextId from "react-id-generator";
import DataContext from "../../../contexts/DataContext";

const starData = [
    {
        top: 130.67,
        left: 61.26,
        url: '/images/constallation/stars/brand-management-stars/brand-management.png',
        title: { top: 82.85, left: -2, text: 'Influence-маркетолог' },
        directions: ['brandManagement'],
        transform: '',
    },
    {
        top: 39.94,
        left: 157.65,
        url: '/images/constallation/stars/promotion/promotion.png',
        title: { top: -7.5, left: 105.48, text: 'Бизнес-девелопер' },
        directions: ['promotionNewBusiness'],
        transform: '',
    },
    {
        top: 33.4,
        left: 227.52,
        url: '/images/constallation/stars/brand-management-stars/brand-management.png',
        title: { top: 2, left: 200.63, text: 'Бренд-стратег' },
        directions: ['brandManagement'],
        transform: '',
    },
    {
        top: 19.05,
        left: 397.76,
        url: '/images/constallation/stars/brand-management-stars/brand-management.png',
        title: { top: -25, left: 352.09, text: 'Бренд-менеджер' },
        directions: ['brandManagement'],
        transform: '',
    },
    {
        top: 95.59,
        left: 322.98,
        url: '/images/constallation/stars/brand-management-stars/brand-management.png',
        title: { top: 81.24, left: 363.39, text: 'Специалист по управлению репутацией бренда' },
        directions: ['brandManagement'],
        transform: '',
    },
];
const directionType = [
    {advertPublicCommunications: false, digitalMarketingCommunications: false, promotionNewBusiness: false, brandManagement: true, marketing: false},
    {advertPublicCommunications: false, digitalMarketingCommunications: false, promotionNewBusiness: true, brandManagement: false, marketing: false},
    {advertPublicCommunications: false, digitalMarketingCommunications: false, promotionNewBusiness: false, brandManagement: true, marketing: false},
    {advertPublicCommunications: false, digitalMarketingCommunications: false, promotionNewBusiness: false, brandManagement: true, marketing: false},
    {advertPublicCommunications: false, digitalMarketingCommunications: false, promotionNewBusiness: false, brandManagement: true, marketing: false},
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
};
starData.map((star) => {
    star.id = nextId();
})
const BrandConstellation = () => {
    return (
        <div className={'brand-development-constellation'} style={{width: 488.09, height: 222.95}}>
            <div className="title">«Созвездие развития бренда»</div>
            <div className="sub-title">Создают успешные продукты под узнаваемым брендом</div>
            <Constellation starData={starData} parentSize={{x: 488.09, y: 222.95}} constellationBlockSize={constellationBlockSize} lineData={lineData} directionType={directionType}/>
        </div>
    )
}
export default BrandConstellation;