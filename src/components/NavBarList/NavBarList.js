import React, {useContext} from "react";
import './navbarlist.scss';
import DataContext from "../../contexts/DataContext";

const TextAdvertising = `Реклама и связи с общественностью в бизнесе`;
const TextBrandManagement = `Бренд-менеджмент`;
const TextMarketingCommunications = `Цифровые маркетинговые коммуникации`;
const TextMarketing = `Маркетинг`;
const TextPromotion = `Продвижение нового бизнеса`;

export const NavBarList = () => {
    const {brandManagement, advertPublic,
        digitalMarketingCommunication, promotionMarketingCommunication,
        marketing, setPromotionMarketingCommunication,
        setAdvertPublic, setBrandManagement,
        setMarketing, setDigitalMarketingCommunication,
    } = useContext(DataContext);

    const list = [
        {src: '/images/listImages/Star Advertising.png', text: TextAdvertising, isActive: advertPublic, },
        {src: '/images/listImages/Star Digital Marketing communications.png', text: TextMarketingCommunications, isActive: digitalMarketingCommunication,},
        {src: '/images/listImages/Star Promotion.png', text: TextPromotion, isActive: promotionMarketingCommunication, },
        {src: '/images/listImages/Star Brand management.png', text: TextBrandManagement, isActive: brandManagement, },
        {src: '/images/listImages/star marketing.png', text: TextMarketing, isActive: marketing, },
    ];

    const handleNavBar = (text) => {
        if (text === 'Реклама и связи с общественностью в бизнесе')
        {
            setAdvertPublic(!advertPublic);
        }
        if (text === 'Бренд-менеджмент')
        {
            setBrandManagement(!brandManagement);
        }
        if (text === 'Цифровые маркетинговые коммуникации')
        {
            setDigitalMarketingCommunication(!digitalMarketingCommunication);
        }
        if (text === 'Маркетинг')
        {
            setMarketing(!marketing);
        }
        if (text === 'Продвижение нового бизнеса')
        {
            setPromotionMarketingCommunication(!promotionMarketingCommunication);
        }
    }

    return(
        <ul className={`navbar-list`}>
            {list.map(({src, text, isActive, }, index) => (
                <li key={index}>
                    <div className={`navbar-list-item`}>
                        <div className={`navbar-list-logo ${isActive ? 'clicked' : ''}`}>
                            <img src={src} alt=""/>
                        </div>
                        <div
                            onClick={ () => {
                                handleNavBar(text);
                            }}
                            className={`navbar-list-item-text ${isActive ? 'active' : ''}`}
                        >{text}</div>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export const NavBarListMobile = () => {
    const {brandManagement, advertPublic,
        digitalMarketingCommunication, promotionMarketingCommunication,
        marketing, setPromotionMarketingCommunication,
        setAdvertPublic, setBrandManagement,
        setMarketing, setDigitalMarketingCommunication,
    } = useContext(DataContext);

    const list = [
        {src: '/images/listImages/Star Advertising.png', text: TextAdvertising, isActive: advertPublic, },
        {src: '/images/listImages/Star Digital Marketing communications.png', text: TextMarketingCommunications, isActive: digitalMarketingCommunication,},
        {src: '/images/listImages/Star Promotion.png', text: TextPromotion, isActive: promotionMarketingCommunication, },
        {src: '/images/listImages/Star Brand management.png', text: TextBrandManagement, isActive: brandManagement, },
        {src: '/images/listImages/star marketing.png', text: TextMarketing, isActive: marketing, },
    ];

    const handleNavBar = (text) => {
        if (text === 'Реклама и связи с общественностью в бизнесе')
        {
            setAdvertPublic(!advertPublic);
        }
        if (text === 'Бренд-менеджмент')
        {
            setBrandManagement(!brandManagement);
        }
        if (text === 'Цифровые маркетинговые коммуникации')
        {
            setDigitalMarketingCommunication(!digitalMarketingCommunication);
        }
        if (text === 'Маркетинг')
        {
            setMarketing(!marketing);
        }
        if (text === 'Продвижение нового бизнеса')
        {
            setPromotionMarketingCommunication(!promotionMarketingCommunication);
        }
    }

    return(
        <div className={`navbar-list-mobile`}>
                {list.map(({src, text, isActive, }, index) => (
                    <div key={index} className={`navbar-list-item-mobile ${isActive ? 'clicked' : ''}`}>
                        <div className={`navbar-list-logo-mobile ${isActive ? 'clicked' : ''}`}>
                            <img src={src} alt=""/>
                        </div>
                        <div
                            onClick={ () => {
                                handleNavBar(text);
                            }}
                            className={`navbar-list-item-text-mobile ${isActive ? 'active' : ''}`}
                        >{text}</div>
                    </div>
                ))}
        </div>
    )
}
