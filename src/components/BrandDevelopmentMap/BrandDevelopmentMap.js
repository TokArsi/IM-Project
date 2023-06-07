import React from "react";
import ConstellationBrandDevelopment
    from "../Constellations/ConstellationBrandDevelopment/ConstellationBrandDevelopment";
import './branddevelopmentmap.scss'
import ConstellationMarketingAnalytics
    from "../Constellations/ConstellationMarketingAnalytics/ConstellationMarketingAnalytics";
import ConstellationImage from "../Constellations/ConstellationImage/ConstellationImage";
import AdvertCreativeConstellation from "../Constellations/AdvertCreativeConstellation/AdvertCreativeConstellation";
import BrandConstellation from "../Constellations/test/BrandConstellation";
import MarketAnalytics from "../Constellations/test/MarketAnalytics";
import MarketingToolsManagementConstellation from "../Constellations/test/Marketing tools management";
import Image from "../Constellations/test/Image";
import AdvertCreativity from "../Constellations/test/AdvertCreativity";

const BrandDevelopmentMap = () => {
    return (
        <div className="brand-development-map">
            <BrandConstellation/>
            <MarketAnalytics/>
            <Image/>
            <AdvertCreativity/>
            <MarketingToolsManagementConstellation/>
            {/*<AdvertCreativity></AdvertCreativity>*/}
            {/*<MarketingToolsManagementConstellation/>*/}
        </div>
    );
};
export default BrandDevelopmentMap;