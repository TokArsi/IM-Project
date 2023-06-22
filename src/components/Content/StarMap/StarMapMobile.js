import React, {useContext, useEffect, useRef, useState} from "react";
import './starmap.scss';
import BrandDevelopmentMap from "../../BrandDevelopmentMap/BrandDevelopmentMap";

const StarMapMobile = () => {
    const [isClicked, setIsClicked] = useState(false);
    const containerRef = useRef(null);
    return (
        <div className={`star-map-wrapper ${isClicked ? 'clicked' : ''}`}
             ref={containerRef}
             style={{ userSelect: 'none' }}
        >
            <BrandDevelopmentMap/>
        </div>
    )
}
export default StarMapMobile;