import Constellation from "../Constellation/Constellation";
import React, {useContext, useEffect} from "react";
import './style-files/constellationimage.scss'
import nextId from "react-id-generator";
import DataContext from "../../../contexts/DataContext";

const starData = [
    { top: 36.49, left: 58.7, url: '/images/constallation/stars/advert-connect/supervisor-press.png', title: { top: 1.73, left: 0, text: 'Руководитель пресс-службы' }, directions: ['advertPublicCommunications'], isActive: false, },
    { top: 35.7, left: 146.21, url: '/images/constallation/stars/advert-connect/press-helper.png', title: { top: -1.73, left: 146.63, text: 'Пресс-секретарь' }, directions: ['advertPublicCommunications'], isActive: false, },
    { top: 65.07, left: 262.23, url: '/images/constallation/stars/advert-connect/pr-manager.png', title: { top: 70.44, left: 299.02, text: 'PR-менеджер' }, directions: ['advertPublicCommunications', 'digitalMarketingCommunications'], isActive: false, },
    { top: 164.79, left: 307.77, url: '/images/constallation/stars/advert-connect/speech-writer.png', title: { top: 162.78, left: 329.46, text: 'Спичрайтер' }, directions: ['advertPublicCommunications', 'digitalMarketingCommunications'], isActive: false, },
    { top: 199.78, left: 200.44, url: '/images/constallation/stars/promotion/promotion.png', title: { top: 203.78, left: 100, text: 'GR-менеджер' }, directions: ['promotionNewBusiness'], isActive: false, },
];
const directionType = [
    {advertPublicCommunications: true, digitalMarketingCommunications: false, promotionNewBusiness: false, brandManagement: false, marketing: false},
    {advertPublicCommunications: true, digitalMarketingCommunications: false, promotionNewBusiness: false, brandManagement: false, marketing: false},
    {advertPublicCommunications: true, digitalMarketingCommunications: true, promotionNewBusiness: false, brandManagement: false, marketing: false},
    {advertPublicCommunications: true, digitalMarketingCommunications: true, promotionNewBusiness: false, brandManagement: false, marketing: false},
    {advertPublicCommunications: false, digitalMarketingCommunications: false, promotionNewBusiness: true, brandManagement: false, marketing: false},
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
starData.map((star) => {
    star.id = nextId();
})
const Image = () => {

    return (
        <div className={'image-constellation'} style={{width: 397.46, height: 290.05}}>
            <Constellation starData={starData} parentSize={{width: 397.46, height: 290.05}} constellationBlockSize={constellationBlockSize} lineData={lineData} directionType={directionType}/>
            <div className="title">«Созвездие формирования имиджа»</div>
            <div className="sub-title">Поддерживают репутацию и связи с общественностью</div>
        </div>
    )
}
export default Image;