import Constellation from "../Constellation/Constellation";
import React, {useContext, useEffect} from "react";
import './style-files/constellationbranddevelopment.scss'
import nextId from "react-id-generator";
import DataContext from "../../../contexts/DataContext";

const starData = [
    {
        top: 130.67,
        left: 61.26,
        url: '/images/constallation/stars/brand-management-stars/brand-management.svg',
        title: { top: 82.85, left: -11.8, text: 'Influence-маркетолог' },
        directions: ['brandManagement'],
        transform: '',
    },
    {
        top: 39.94,
        left: 157.65,
        url: '/images/constallation/stars/promotion/promotion.svg',
        title: { top: 10.66, left: 30.48, text: 'Бизнес-девелопер' },
        directions: ['promotionNewBusiness'],
        transform: '',
    },
    {
        top: 33.4,
        left: 227.52,
        url: '/images/constallation/stars/brand-management-stars/brand-management.svg',
        title: { top: 0, left: 210.63, text: 'Бренд-стратег' },
        directions: ['brandManagement'],
        transform: '',
    },
    {
        top: 19.05,
        left: 397.76,
        url: '/images/constallation/stars/brand-management-stars/brand-management.svg',
        title: { top: -13, left: 376.09, text: 'Бренд-менеджер' },
        directions: ['brandManagement'],
        transform: '',
    },
    {
        top: 95.59,
        left: 322.98,
        url: '/images/constallation/stars/brand-management-stars/brand-management.svg',
        title: { top: 90.24, left: 363.39, text: 'Специалист по управлению репутацией бренда' },
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
    { top: 50.51, left: 71.63,  url: '/images/constallation/brand-development/line.svg' },
    { top: 44.75, left: 168.42, url: '/images/constallation/brand-development/line2.svg' },
    { top: 45.64, left: 236.56, url: '/images/constallation/brand-development/line3.svg' },
    { top: 30.34, left: 236.56, url: '/images/constallation/brand-development/line4.svg' },
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