import Constellation from "../Constellation/Constellation";
import React from "react";
import './style-files/constellationmarketinganalytics.scss'
import nextId from "react-id-generator";

const starData = [
    { top: 33.3, left: 10.34,  url: '/images/constallation/stars/marketing-analytic-stars/marketing-analytic.png',  title: {top: 0, left: 15.2, text: 'Маркетинговый аналитик'}, directions: ['marketing']},
    { top: 64.39, left: 100.24,  url: '/images/constallation/stars/marketing-analytic-stars/marketing-analytic.png', title: {top: 63.59, left: 140.22, text: 'Performance-маркетолог'}, directions: ['marketing']},
    { top: 136.31, left: 177.56, url: '/images/constallation/stars/advert-connect/account-manager.png', title: {top: 167.12, left: 144.36, text: 'Менеджер по рекламе'}, directions: ['advertPublicCommunications', 'digitalMarketingCommunications', 'promotionNewBusiness']},
    { top: 121.79, left: 55.69, url: '/images/constallation/stars/advert-connect/advert-manager.png', title: {top: 86.1, left: 0, text: 'Аккаунт-менеджер'}, directions: ['advertPublicCommunications', 'promotionNewBusiness']},
    { top: 94.55, left: 241.71,  url: '/images/constallation/stars/advert-connect/advert-strategic.png', title: {top: 85.91, left: 274.32, text: 'Рекламный стратег'}, directions: ['advertPublicCommunications']},
    { top: 148.1, left: 281.61,  url: '/images/constallation/stars/marketing-analytic-stars/marketing-analytic.png', title: {top: 187.76, left: 218.77, text: 'Менеджер по маркетингу'}, directions: ['marketing']},
    { top: 208.69, left: 361.96,  url: '/images/constallation/stars/marketing-analytic-stars/marketing-analytic.png', title: {top: 203.11, left: 402.76, text: 'Специалист по маркетинговым исследованиям'}, directions: ['marketing']},
    { top: 93.89, left: 385.83,  url: '/images/constallation/stars/marketing-analytic-stars/marketing-analytic.png', title: {top: 133.83, left: 391.32, text: 'Руководитель отдела маркетинга'}, directions: ['marketing']},
    { top: 65.19, left: 445.49,  url: '/images/constallation/stars/marketing-analytic-stars/marketing-analytic.png',title: {top: 61.82, left: 486.26, text: 'Директор по маркетингу'}, directions: ['marketing']},
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
    { top: 47.61, left: 30.63,  url: '/images/constallation/marketing-analytics/line1.png'},
    { top: 80.86, left: 116.54, url: '/images/constallation/marketing-analytics/line2.png'},
    { top: 134.52, left: 67.22, url: '/images/constallation/marketing-analytics/line3.png'},
    { top: 110.16, left: 186.33, url: '/images/constallation/marketing-analytics/line4.png'},
    { top: 108, left: 257.25, url: '/images/constallation/marketing-analytics/line5.png'},
    { top: 162.07, left: 294.33, url: '/images/constallation/marketing-analytics/line6.png'},
    { top: 75.43, left: 302.3, url: '/images/constallation/marketing-analytics/line7.png'},
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