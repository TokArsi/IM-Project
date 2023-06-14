import React, {useContext} from "react";
import './navbarlist.scss';
import DataContext from "../../contexts/DataContext";
export const NavBarList = () => {
    const TextAdvertising = `Реклама и связи с общественностью в бизнесе`;
    const TextBrandManagement = `Бренд-менеджмент`;
    const TextMarketingCommunications = `Цифровые маркетинговые коммуникации`;
    const TextMarketing = `Маркетинг`;
    const TextPromotion = `Продвижение нового бизнеса`;
    const {brandManagement, advertPublic,
        digitalMarketingCommunication, promotionMarketingCommunication,
        marketing, setPromotionMarketingCommunication,
        setAdvertPublic, setBrandManagement,
        setMarketing, setDigitalMarketingCommunication,
    } = useContext(DataContext);
    const list = [
        {src: '/images/listImages/Star Advertising', text: TextAdvertising, isActive: advertPublic},
        {src: '/images/listImages/Star Digital Marketing communications', text: TextMarketingCommunications, isActive: digitalMarketingCommunication},
        {src: '/images/listImages/Star Promotion', text: TextPromotion, isActive: promotionMarketingCommunication},
        {src: '/images/listImages/Star Brand management', text: TextBrandManagement, isActive: brandManagement},
        {src: '/images/listImages/star marketing', text: TextMarketing, isActive: marketing},
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
            {list.map(({src, text, isActive}, index) => (
                <li key={index}>
                    <div className={`navbar-list-item`}>
                        <img src={isActive ? src + '-active.png': src + '.png'} alt=""/>
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
