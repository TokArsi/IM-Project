import Constellation from "../Constellation/Constellation";
import React from "react";
import './style-files/marketingtoolsmanagement.scss'

const starData = [
    { top: 372.38, left: 34.46,  url: '/images/constallation/stars/advert-connect/mediaplanner.png', title: {top: 380.92, left: 71.87, text: `Медиапланер`}},
    { top: 254.92, left: 222.43, url: '/images/constallation/stars/brand-management-stars/brand-management-common.png', title: {top: 257.92, left: 250.19, text: `Event-менеджер`}},
    { top: 274.92, left: 85.6, url: '/images/constallation/stars/marketing-analytic-stars/marketing-analytic.png', title: {top: 277.92, left: 0, text: `BTL-менеджер`}},
    { top: 204.73, left: 156.94, url: '/images/constallation/stars/promotion/promotion.png', title: {top: 207.92, left: 186.19, text: `Проджект-менеджер`}},
    { top: 128.2, left: 153.76, url: '/images/constallation/stars/promotion/promotion.png', title: {top: 124.21, left: 82.35, text: `Продакт-менеджер`}},
    { top: 108.57, left: 251.87, url: '/images/constallation/stars/promotion/promotion.png', title: {top: 105.87, left: 280.41, text: `Категорийный менеджер`}},
    { top: 76.19, left: 201.49, url: '/images/constallation/stars/marketing-analytic-stars/marketing-analytic.png', title: {top: 37.89, left: 123.53, text: `Специалист по ценообразованию`}},
    { top: 53.25, left: 273.09, url: '/images/constallation/stars/marketing-analytic-stars/marketing-analytic.png', title: {top: 0, left: 248.04, text: `Менеджер по дистрибуции и продажам`}},
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

const constellationBlockSize = {
    width: 382.95,
    height: 404.85
}
const MarketingToolsManagementConstellation = () => {
    return (
        <div className={'marketing-tools-management-constellation'} style={{width: 383.64, height: 503.05}}>
            <Constellation starData={starData} parentSize={{x: 383.64, y: 503.05}} constellationBlockSize={constellationBlockSize} lineData={lineData}/>
            <div className="title">«Созвездие управления маркетинговыми инструментами»</div>
            <div className="sub-title">Используют технологии ценообразования, дистрибьюции и управления продуктом</div>
        </div>
    )
}
export default MarketingToolsManagementConstellation