import React from "react";
import {NavBarList} from "../../NavBarList/NavBarList"
import './headernavbar.scss'

const HeaderNavBar = () => {
    return(
        <div className={`header-navbar-block`}>
            <div className="header-navbar-content">
                <div className="header-navbar-block-title">
                    Программы бакалавриата Института маркетинга
                </div>
                <div className="header-subtitle">Нажмите на программу для просмотра соответствия на карте</div>
                <div className="header-navbar-list">
                    <NavBarList/>
                </div>
            </div>
        </div>
    )
}
export default HeaderNavBar;