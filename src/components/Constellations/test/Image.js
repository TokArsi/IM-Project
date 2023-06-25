import Constellation from "../Constellation/Constellation";
import React, {useContext, useEffect} from "react";
import './style-files/constellationimage.scss'
import nextId from "react-id-generator";
import DataContext from "../../../contexts/DataContext";

const starData = [
    {
        top: 38.49,
        left: 58.7,
        url: '/images/constallation/stars/advert-connect/supervisor-press.svg',
        title: { top: -10.33, left: -11.8, text: 'Руководитель пресс-службы' },
        directions: ['advertPublicCommunications'],
        transform: '',
    },
    {
        top: 37.7,
        left: 146.21,
        url: '/images/constallation/stars/advert-connect/press-helper.svg',
        title: { top: -11.73, left: 136.63, text: 'Пресс-секретарь' },
        directions: ['advertPublicCommunications'],
        transform: '',
    },
    {
        top: 69.07,
        left: 262.23,
        url: '/images/constallation/stars/advert-connect/pr-manager.svg',
        title: { top: 65.44, left: 301.02, text: 'PR-менеджер' },
        directions: ['advertPublicCommunications', 'digitalMarketingCommunications'],
        transform: 'matrix(-1, 0.08, -0.08, -1, 0, 0)',
    },
    {
        top: 157.79,
        left: 306.77,
        url: '/images/constallation/stars/advert-connect/speech-writer.svg',
        title: { top: 160.78, left: 343.46, text: 'Спичрайтер' },
        directions: ['advertPublicCommunications', 'digitalMarketingCommunications'],
        transform: '',
    },
    {
        top: 199.78,
        left: 200.44,
        url: '/images/constallation/stars/promotion/promotion.svg',
        title: { top: 203.78, left: 80, text: 'GR-менеджер' },
        directions: ['promotionNewBusiness'],
        transform: '',
    },
];
const directionType = [
    {advertPublicCommunications: true, digitalMarketingCommunications: false, promotionNewBusiness: false, brandManagement: false, marketing: false},
    {advertPublicCommunications: true, digitalMarketingCommunications: false, promotionNewBusiness: false, brandManagement: false, marketing: false},
    {advertPublicCommunications: true, digitalMarketingCommunications: true, promotionNewBusiness: false, brandManagement: false, marketing: false},
    {advertPublicCommunications: true, digitalMarketingCommunications: true, promotionNewBusiness: false, brandManagement: false, marketing: false},
    {advertPublicCommunications: false, digitalMarketingCommunications: false, promotionNewBusiness: true, brandManagement: false, marketing: false},
];
const lineData = [
    { top: 47.97, left: 69.96,  url: '/images/constallation/Image/line1.svg'},
    { top: 47.97, left: 158.13, url: '/images/constallation/Image/line2.svg'},
    { top: 75.36, left: 276.85, url: '/images/constallation/Image/line3.svg'},
    { top: 170.9, left: 213.64, url: '/images/constallation/Image/line4.svg'},
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