import Constellation from "../Constellation/Constellation";
import React, {useContext, useEffect} from "react";
import './style-files/constellationmarketinganalytics.scss'
import nextId from "react-id-generator";
import DataContext from "../../../contexts/DataContext";

const starData = [
    {
        top: 33.3,
        left: 10.34,
        url: '/images/constallation/stars/marketing-analytic-stars/marketing-analytic.svg',
        title: {top: -14, left: 11.2, text: 'Маркетинговый аналитик'},
        directions: ['marketing'],
        transform: '',
    },
    {
        top: 64.39,
        left: 100.24,
        url: '/images/constallation/stars/marketing-analytic-stars/marketing-analytic.svg',
        title: {top: 31.59, left: 140.22, text: 'Performance - маркетолог'},
        directions: ['marketing'],
        transform: '',
    },
    {
        top: 136.31,
        left: 177.56,
        url: '/images/constallation/stars/advert-connect/advert-manager.svg',
        title: {top: 170.12, left: 118.36, text: 'Менеджер по рекламе'},
        directions: ['advertPublicCommunications', 'digitalMarketingCommunications', 'promotionNewBusiness'],
        transform: 'matrix(-1, 0.08, -0.08, -1, 0, 0)',
    },
    {
        top: 126.71,
        left: 55.69,
        url: '/images/constallation/stars/advert-connect/account-manager.svg',
        title: {top: 98.8, left: -22, text: 'Аккаунт-менеджер'},
        directions: ['advertPublicCommunications', 'promotionNewBusiness'],
        transform: '',
    },
    {
        top: 98.55,
        left: 241.71,
        url: '/images/constallation/stars/advert-connect/advert-strategic.svg',
        title: {top: 55.91, left: 251.32, text: 'Рекламный стратег'},
        directions: ['advertPublicCommunications'],
        transform: 'matrix(0.98, -0.19, 0.19, 0.98, 0, 0)',
    },
    {
        top: 148.1,
        left: 279.61,
        url: '/images/constallation/stars/marketing-analytic-stars/marketing-analytic.svg',
        title: {top: 189.76, left: 227.77, text: 'Менеджер по маркетингу'},
        directions: ['marketing'],
        transform: '',
    },
    {
        top: 208.69,
        left: 361.96,
        url: '/images/constallation/stars/marketing-analytic-stars/marketing-analytic.svg',
        title: {top: 246.11, left: 332.76, text: 'Специалист по маркетинговым исследованиям'},
        directions: ['marketing'],
        transform: '',
    },
    {
        top: 97.89,
        left: 385.83,
        url: '/images/constallation/stars/marketing-analytic-stars/marketing-analytic.svg',
        title: {top: 133.83, left: 391.32, text: 'Руководитель отдела маркетинга'},
        directions: ['marketing'],
        transform: '',
    },
    {
        top: 69.19,
        left: 445.49,
        url: '/images/constallation/stars/marketing-analytic-stars/marketing-analytic.svg',
        title: {top: 30.82, left: 486.26, text: 'Директор по маркетингу'},
        directions: ['marketing'],
        transform: '',
    },
];

const directionType = [
    {advertPublicCommunications: false, digitalMarketingCommunications: false, promotionNewBusiness: false, brandManagement: false, marketing: true},
    {advertPublicCommunications: false, digitalMarketingCommunications: false, promotionNewBusiness: false, brandManagement: false, marketing: true},
    {advertPublicCommunications: true, digitalMarketingCommunications: true, promotionNewBusiness: true, brandManagement: false, marketing: false},
    {advertPublicCommunications: true, digitalMarketingCommunications: false, promotionNewBusiness: true, brandManagement: false, marketing: false},
    {advertPublicCommunications: true, digitalMarketingCommunications: false, promotionNewBusiness: false, brandManagement: false, marketing: false},
    {advertPublicCommunications: false, digitalMarketingCommunications: false, promotionNewBusiness: false, brandManagement: false, marketing: true},
    {advertPublicCommunications: false, digitalMarketingCommunications: false, promotionNewBusiness: false, brandManagement: false, marketing: true},
    {advertPublicCommunications: false, digitalMarketingCommunications: false, promotionNewBusiness: false, brandManagement: false, marketing: true},
    {advertPublicCommunications: false, digitalMarketingCommunications: false, promotionNewBusiness: false, brandManagement: false, marketing: true},
];
const lineData = [
    { top: 47.61, left: 30.63,  url: '/images/constallation/marketing-analytics/line1.svg'},
    { top: 80.86, left: 116.54, url: '/images/constallation/marketing-analytics/line2.svg'},
    { top: 134.52, left: 67.22, url: '/images/constallation/marketing-analytics/line3.svg'},
    { top: 110.16, left: 186.33, url: '/images/constallation/marketing-analytics/line4.svg'},
    { top: 108, left: 257.25, url: '/images/constallation/marketing-analytics/line5.svg'},
    { top: 162.07, left: 294.33, url: '/images/constallation/marketing-analytics/line6.svg'},
    { top: 75.43, left: 302.3, url: '/images/constallation/marketing-analytics/line7.svg'},
];

const constellationBlockSize = {
    width: 580.19, height: 248.55
};
starData.map((star) => {
    star.id = nextId();
})
const MarketAnalytics = () => {

    return (
        <div className={'marketing-analytics-constellation'} style={{width: 580.19, height: 311.72}}>
            <div className="title">«Созвездие маркетинговой аналитики»</div>
            <div className="sub-title">Исследуют показатели рынка, потребителей и конкурентов</div>
            <Constellation starData={starData} parentSize={{width: 580.19, height: 311.72}} constellationBlockSize={constellationBlockSize} lineData={lineData} directionType={directionType}/>
        </div>
    )
}
export default MarketAnalytics;