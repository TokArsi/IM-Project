import React from "react";
import HeaderNavBar from "./HeaderNavBar/HeaderNavBar";
import './header.scss'

const Header = () => {
    return(
        <div className={`header`}>
            <div className="header-information">
                <div className="header-title">
                   Звездная карта профессий в области маркетинга, рекламы и брендинга
                </div>
                <div className={`header-note`}>
                    <p>
                        *На карте представлены востребованные профессии и должностные позиции, на которые могут претендовать выпускники, прошедшие подготовку по программам Института маркетинга Государственного университета управления. Профессии сгруппированы в созвездия по профилю выполняемых задач. Каждая позиция сопровождается описанием и ссылкой на образовательную программу.
                    </p>
                </div>
            </div>
            <HeaderNavBar/>
        </div>
    )
}
export default Header;