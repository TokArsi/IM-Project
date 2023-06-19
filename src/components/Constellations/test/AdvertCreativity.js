import Constellation from "../Constellation/Constellation";
import React, {useContext, useEffect} from "react";
import './style-files/advertcreativeconstellation.scss'
import nextId from "react-id-generator";
import DataContext from "../../../contexts/DataContext";

const starData = [
    {
        top: 74.08,
        left: 70.45,
        url: '/images/constallation/stars/advert-connect/copywriter.png',
        title: { top: 60.98, left: -20, text: `Копирайтер`},
        directions: ['advertPublicCommunications', 'digitalMarketingCommunications'],
        transform: 'matrix(-0.95, -0.3, 0.3, -0.95, 0, 0)',
    },
    {
        top: 171.31,
        left: 84.66,
        url: '/images/constallation/stars/advert-connect/smm-manager.png',
        title: { top: 153.15, left: 4.48, text: `SMM-менеджер`},
        directions: ['advertPublicCommunications', 'digitalMarketingCommunications'],
        transform: '',
    },
    {
        top: 5.56,
        left: 172.29,
        url: '/images/constallation/stars/digital-communications/digital.png',
        title: { top: 37.59, left: 189.24, text: `Таргетолог`},
        directions: ['digitalMarketingCommunications'],
        transform: '',
    },
    {
        top: 273.63,
        left: 116.24,
        url: '/images/constallation/stars/digital-communications/digital.png',
        title: { top: 276.71, left: 48.72, text: `Креатор`},
        directions: ['digitalMarketingCommunications'],
        transform: '',
    },
    {
        top: 282.79,
        left: 250.53,
        url: '/images/constallation/stars/advert-connect/content-producer.png',
        title: { top: 278.64, left: 289.57, text: `Контент-продюсер`},
        directions: ['advertPublicCommunications', 'digitalMarketingCommunications'],
        transform: '',
    },
    {
        top: 153.87,
        left: 303.8,
        url: '/images/constallation/stars/advert-connect/content-marketolog.png',
        title: { top: 149.87, left: 342.25, text: `Контент-маркетолог`},
        directions: ['advertPublicCommunications'],
        transform: 'matrix(0.87, -0.48, 0.48, 0.88, 0, 0)',
    },
    {
        top: 151.48,
        left: 163.38,
        url: '/images/constallation/stars/advert-connect/content-manager.png',
        title: { top: 184.74, left: 173.16, text: `Контент-менеджер`},
        directions: ['advertPublicCommunications'],
        transform: 'matrix(0.95, 0.3, -0.3, 0.95, 0, 0)',
    },
];

const lineData = [
    { top: 83.31, left: 84.31,  url: '/images/constallation/advert-creative/line1.png'},
    { top: 10, left: 98.87, url: '/images/constallation/advert-creative/line2.png'},
    { top: 175.04, left: 95.06, url: '/images/constallation/advert-creative/line3.png'},
    { top: 285, left: 123.6, url: '/images/constallation/advert-creative/line4.png'},
    { top: 161.99, left: 260.61, url: '/images/constallation/advert-creative/line5.png'},
    { top: 162.71, left: 178.73, url: '/images/constallation/advert-creative/line6.png'},
    { top: 84.31, left: 84.31, url: '/images/constallation/advert-creative/line7.png'},
];

const directionType = [
    {advertPublicCommunications: true, digitalMarketingCommunications: true, promotionNewBusiness: false, brandManagement: false, marketing: false},
    {advertPublicCommunications: true, digitalMarketingCommunications: true, promotionNewBusiness: false, brandManagement: false, marketing: false},
    {advertPublicCommunications: false, digitalMarketingCommunications: true, promotionNewBusiness: false, brandManagement: false, marketing: false},
    {advertPublicCommunications: false, digitalMarketingCommunications: true, promotionNewBusiness: false, brandManagement: false, marketing: false},
    {advertPublicCommunications: true, digitalMarketingCommunications: true, promotionNewBusiness: false, brandManagement: false, marketing: false},
    {advertPublicCommunications: true, digitalMarketingCommunications: false, promotionNewBusiness: false, brandManagement: false, marketing: false},
    {advertPublicCommunications: true, digitalMarketingCommunications: false, promotionNewBusiness: false, brandManagement: false, marketing: false},
];

const constellationBlockSize = {
    width: 411.08, height: 333.14
}
starData.map((star) => {
    star.id = nextId();
})

const AdvertCreativity = () => {

    const {
        setIsStarActive,
    } = useContext(DataContext);

    useEffect(() => {
        const initialState = {};
        starData.forEach(star => {
            initialState[star.id] = false;
        });
        setIsStarActive(prevState => ({ ...prevState, ...initialState }));
    }, []);

    return (
        <div className={'advert-creative-constellation'} style={{width: 423.13, height: 365.21}}>
            <Constellation starData={starData} parentSize={{width: 423.13, height: 365.21}} constellationBlockSize={constellationBlockSize} lineData={lineData} directionType={directionType}/>
            <div className="title">«Созвездие рекламного креатива»</div>
            <div className="sub-title">Продюсируют интересный контент в диджитал и в офлайне</div>
        </div>
    )
}
export default AdvertCreativity;