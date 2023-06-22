import React, {useState} from "react";
import DataContext from "../contexts/DataContext";
import Content, {ContentMobile} from "./Content/Content";
import Header from "./Header/Header";
import Footer, {FooterMobile} from "./Footer/Footer";
import HeaderMobile from "./Header/HeaderMobile";

export const DesktopView = () => {
    const [advertPublic, setAdvertPublic] = useState(false);
    const [digitalMarketingCommunication, setDigitalMarketingCommunication] = useState(false);
    const [promotionMarketingCommunication, setPromotionMarketingCommunication] = useState(false);
    const [brandManagement, setBrandManagement] = useState(false);
    const [marketing, setMarketing] = useState(false);
    const [isStarActive, setIsStarActive] = useState({});
    const [isStarNavigated, setIsStarNavigated] = useState({});
    const [starName, setStarName] = useState(null);

    return (
        <DataContext.Provider
            value={{
                brandManagement,
                advertPublic,
                digitalMarketingCommunication,
                promotionMarketingCommunication,
                marketing,
                setPromotionMarketingCommunication,
                setAdvertPublic,
                setBrandManagement,
                setMarketing,
                setDigitalMarketingCommunication,
                isStarActive,
                setIsStarActive,
                starName,
                setStarName,
                isStarNavigated, setIsStarNavigated
            }}
        >
                <React.Fragment>
                    <div className="container">
                        <Header />
                        <Content />
                    </div>
                    <Footer />
                </React.Fragment>
        </DataContext.Provider>
    );
};

export const MobileView = () => {
    const [advertPublic, setAdvertPublic] = useState(false);
    const [digitalMarketingCommunication, setDigitalMarketingCommunication] = useState(false);
    const [promotionMarketingCommunication, setPromotionMarketingCommunication] = useState(false);
    const [brandManagement, setBrandManagement] = useState(false);
    const [marketing, setMarketing] = useState(false);
    const [isStarActive, setIsStarActive] = useState({});
    const [starName, setStarName] = useState(null);
    const [isStarNavigated, setIsStarNavigated] = useState({});
    return (
        <React.Fragment>
                    <DataContext.Provider value={{
                        brandManagement, advertPublic,
                        digitalMarketingCommunication, promotionMarketingCommunication,
                        marketing, setPromotionMarketingCommunication,
                        setAdvertPublic, setBrandManagement,
                        setMarketing, setDigitalMarketingCommunication,
                        isStarActive, setIsStarActive,
                        starName, setStarName,
                        isStarNavigated, setIsStarNavigated
                    }}>
                        <div className="container">
                            <HeaderMobile/>
                            <ContentMobile/>
                        </div>
                        <FooterMobile/>
                    </DataContext.Provider>
        </React.Fragment>
    )
}