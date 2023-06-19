import Constellation from "../Constellation/Constellation";
import React, {useContext, useEffect} from "react";
import './style-files/marketingtoolsmanagement.scss'
import nextId from "react-id-generator";
import DataContext from "../../../contexts/DataContext";

const starData = [
    {
        top: 380.38,
        left: 34.46,
        url: '/images/constallation/stars/advert-connect/mediaplanner.png',
        title: { top: 382.92, left: 76.87, text: 'Медиапланер' },
        directions: ['advertPublicCommunications', 'digitalMarketingCommunications', 'promotionNewBusiness'],
        transform: 'matrix(0.87, -0.48, -0.48, -0.88, 0, 0)',
    },
    {
        top: 254.92,
        left: 222.43,
        url: '/images/constallation/stars/brand-management-stars/brand-management.png',
        title: { top: 257.92, left: 262.19, text: 'Event-менеджер' },
        directions: ['brandManagement'],
        transform: '',
    },
    {
        top: 279.92,
        left: 89.6,
        url: '/images/constallation/stars/marketing-analytic-stars/marketing-analytic.png',
        title: { top: 283.92, left: 12.84, text: 'BTL-менеджер' },
        directions: ['marketing'],
        transform: '',
    },
    {
        top: 204.73,
        left: 156.94,
        url: '/images/constallation/stars/promotion/promotion.png',
        title: { top: 199.92, left: 199.19, text: 'Проджект-менеджер' },
        directions: ['promotionNewBusiness'],
        transform: '',
    },
    {
        top: 128.2,
        left: 153.76,
        url: '/images/constallation/stars/Promotion-Brand.png',
        title: { top: 124.21, left: 73.35, text: 'Продакт-менеджер' },
        directions: ['promotionNewBusiness', 'brandManagement', 'marketing'],
        transform: '',
    },
    {
        top: 108.57,
        left: 251.87,
        url: '/images/constallation/stars/promotion/promotion.png',
        title: { top: 101.87, left: 295.41, text: 'Категорийный менеджер' },
        directions: ['promotionNewBusiness'],
        transform: '',
    },
    {
        top: 79.19,
        left: 208.49,
        url: '/images/constallation/stars/marketing-analytic-stars/marketing-analytic.png',
        title: { top: 12.89, left: 123.53, text: 'Специалист по ценообразованию' },
        directions: ['marketing'],
        transform: '',
    },
    {
        top: 55.25,
        left: 279.09,
        url: '/images/constallation/stars/marketing-analytic-stars/marketing-analytic.png',
        title: { top: -12.99, left: 259.04, text: 'Менеджер по дистрибуции и продажам' },
        directions: ['marketing'],
        transform: '',
    },
];

const directionType = [
    {advertPublicCommunications: true, digitalMarketingCommunications: true, promotionNewBusiness: true, brandManagement: false, marketing: false},
    {advertPublicCommunications: false, digitalMarketingCommunications: false, promotionNewBusiness: false, brandManagement: true, marketing: false},
    {advertPublicCommunications: false, digitalMarketingCommunications: false, promotionNewBusiness: false, brandManagement: false, marketing: true},
    {advertPublicCommunications: false, digitalMarketingCommunications: false, promotionNewBusiness: true, brandManagement: false, marketing: false},
    {advertPublicCommunications: false, digitalMarketingCommunications: false, promotionNewBusiness: true, brandManagement: true, marketing: true},
    {advertPublicCommunications: false, digitalMarketingCommunications: false, promotionNewBusiness: true, brandManagement: false, marketing: false},
    {advertPublicCommunications: false, digitalMarketingCommunications: false, promotionNewBusiness: false, brandManagement: false, marketing: true},
    {advertPublicCommunications: false, digitalMarketingCommunications: false, promotionNewBusiness: false, brandManagement: false, marketing: true},
];

const lineData = [
    { top: 269.58, left: 47.79,  url: '/images/constallation/marketing-tools-lines/Line 1.png'},
    { top: 263.48, left: 102.73, url: '/images/constallation/marketing-tools-lines/Line 2.png'},
    { top: 208.88, left: 105.45, url: '/images/constallation/marketing-tools-lines/Line 3.png'},
    { top: 139.76, left: 163.89, url: '/images/constallation/marketing-tools-lines/Line 4.png'},
    { top: 119.82, left: 166.88, url: '/images/constallation/marketing-tools-lines/Line 5.png'},
    { top: 88.15, left: 165.69, url: '/images/constallation/marketing-tools-lines/Line 6.png'},
    { top: 70.79, left: 262.46, url: '/images/constallation/marketing-tools-lines/Line 7.png'},
];

const constellationBlockSize = {
    width: 382.95,
    height: 404.85
}
starData.map((star) => {
    star.id = nextId();
})
const MarketingToolsManagementConstellation = () => {
    return (
        <div className={'marketing-tools-management-constellation'} style={{width: 383.64, height: 503.05}}>
            <Constellation starData={starData} parentSize={{x: 383.64, y: 503.05}} constellationBlockSize={constellationBlockSize} lineData={lineData} directionType={directionType}/>
            <div className="title">«Созвездие управления маркетинговыми инструментами»</div>
            <div className="sub-title">Используют технологии ценообразования, дистрибьюции и управления продуктом</div>
        </div>
    )
}
export default MarketingToolsManagementConstellation