import React from "react";
import './navbarlist.scss'
export const NavBarList = () => {
    const TextAdvertising = `Реклама и связи с общественностью в бизнесе`;
    const TextBrandManagement = `Бренд-менеджмент`;
    const TextMarketingCommunications = `Цифровые маркетинговые коммуникации`;
    const TextMarketing = `Маркетинг`;
    const TextPromotion = `Продвижение нового бизнеса`;
    const list = [
        {src: '/images/listImages/Star Advertising.png', text: TextAdvertising},
        {src: '/images/listImages/Star Digital Marketing communications.png', text: TextMarketingCommunications},
        {src: '/images/listImages/Star Promotion.png', text: TextPromotion},
        {src: '/images/listImages/Star Brand management.png', text: TextBrandManagement},
        {src: '/images/listImages/star marketing.png', text: TextMarketing},
    ]
    return(
        <ul className={`navbar-list`}>
            {list.map(({src, text}, index) => (
                <li key={index}>
                    <div className={`navbar-list-item`}>
                        <img src={src} alt=""/>
                        <div className={`navbar-list-item-text`}>{text}</div>
                    </div>
                </li>
            ))}
        </ul>
    )
}
