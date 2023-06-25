import React from "react";
import './header.scss';
import {NavBarList} from "../NavBarList/NavBarList";
import HeaderNavBar from "./HeaderNavBar/HeaderNavBar";
const LogoHeaderMobile = () => {
    return(
        <div className="logo-wrapper-mobile">
            <div className="logos">
                <img src="/images/listImages/guulogo.svg" alt=""/>
                <img src="/images/listImages/imlogo.svg" alt=""/>
            </div>
            <div className="university-info">
                <div className={`university-title`}>Государственный университет управления</div>
                <div className={`institute-title`}>Институт Маркетинга</div>
            </div>
        </div>
    )
}

const HeaderMobile = () => {
    return(
        <div className={`header-mobile`}>
            <LogoHeaderMobile></LogoHeaderMobile>
            <div className="header-information-mobile">
                <div className="header-title-mobile">
                    Звездная карта профессий в области маркетинга, рекламы и брендинга
                </div>
                <div className={`header-note-mobile`}>
                    <p>
                        *На карте представлены востребованные профессии и должностные позиции, на которые могут претендовать выпускники, прошедшие подготовку по программам Института маркетинга Государственного университета управления. Профессии сгруппированы в созвездия по профилю выполняемых задач. Каждая позиция сопровождается описанием и ссылкой на образовательную программу.
                    </p>
                </div>
                <HeaderNavBar/>
            </div>
        </div>
    )
}

export default HeaderMobile;