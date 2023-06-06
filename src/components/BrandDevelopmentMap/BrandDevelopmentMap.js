import React from "react";
import ConstellationBrandDevelopment
    from "../Constellations/ConstellationBrandDevelopment/ConstellationBrandDevelopment";
import './branddevelopmentmap.scss'
import ConstellationMarketingAnalytics
    from "../Constellations/ConstellationMarketingAnalytics/ConstellationMarketingAnalytics";
import ConstellationImage from "../Constellations/ConstellationImage/ConstellationImage";
import AdvertCreativeConstellation from "../Constellations/AdvertCreativeConstellation/AdvertCreativeConstellation";
import BrandConstellation from "../Constellations/test/test";
import MarketingToolsManagementConstellation from "../Constellations/test/Marketing tools management";

const BrandDevelopmentMap = () => {
    return (
        <div className="brand-development-map">
            {/*<ConstellationBrandDevelopment/>*/}
            {/*<ConstellationMarketingAnalytics/>*/}
            {/*<ConstellationImage/>*/}
            {/*<AdvertCreativeConstellation/>*/}
            <BrandConstellation/>
            <MarketingToolsManagementConstellation/>
        </div>
    );
};
export default BrandDevelopmentMap;