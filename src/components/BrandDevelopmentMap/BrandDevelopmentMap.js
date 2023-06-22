import React, {useContext, useEffect, useState} from "react";
import './branddevelopmentmap.scss'
import BrandConstellation from "../Constellations/test/BrandConstellation";
import MarketAnalytics from "../Constellations/test/MarketAnalytics";
import MarketingToolsManagementConstellation from "../Constellations/test/Marketing tools management";
import Image from "../Constellations/test/Image";
import AdvertCreativity from "../Constellations/test/AdvertCreativity";
import DataContext from "../../contexts/DataContext";

const BrandDevelopmentMap = () => {
    const {
        setIsStarActive, setIsStarNavigated
    } = useContext(DataContext);

    useEffect(() => {
        const objectWithKeys = {};
        const numberOfKeys = 35;
        for (let i = 1; i <= numberOfKeys; i++) {
            const key = `id${i}`;
            objectWithKeys[key] = false;
        }
        setIsStarActive(objectWithKeys);
        setIsStarNavigated(objectWithKeys);
    }, []);

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