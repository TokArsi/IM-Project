import React from "react";
import ConstellationBrandDevelopment
    from "../Constellations/ConstellationBrandDevelopment/ConstellationBrandDevelopment";
import './branddevelopmentmap.scss'
import ConstellationMarketingAnalytics
    from "../Constellations/ConstellationMarketingAnalytics/ConstellationMarketingAnalytics";
import ConstellationImage from "../Constellations/ConstellationImage/ConstellationImage";
import AdvertCreativeConstellation from "../Constellations/AdvertCreativeConstellation/AdvertCreativeConstellation";
import BrandConstellation from "../Constellations/test/test";

const BrandDevelopmentMap = () => {
    return (
        <div className="brand-development-map">
            {/*<ConstellationBrandDevelopment/>*/}
            {/*<ConstellationMarketingAnalytics/>*/}
            {/*<ConstellationImage/>*/}
            {/*<AdvertCreativeConstellation/>*/}
            <BrandConstellation/>
        </div>
    );
};
export default BrandDevelopmentMap;