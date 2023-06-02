import React from "react";
import './starmap.scss'
import ConstellationBrandDevelopment
    from "../../Constellations/ConstellationBrandDevelopment/ConstellationBrandDevelopment";

const StarMap = () => {
    return (
        <div className="star-map-wrapper">
            <div className="star-map-content">
                <ConstellationBrandDevelopment/>
            </div>
        </div>
    )
}
export default StarMap;