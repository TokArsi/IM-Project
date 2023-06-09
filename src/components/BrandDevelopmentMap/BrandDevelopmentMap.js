import React from "react";
import './branddevelopmentmap.scss'
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
        </div>
    );
};
export default BrandDevelopmentMap;