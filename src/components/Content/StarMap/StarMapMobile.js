import React, {useContext, useEffect, useRef, useState} from "react";
import './starmap.scss';
import BrandDevelopmentMap from "../../BrandDevelopmentMap/BrandDevelopmentMap";

const StarMapMobile = () => {
    const [isClicked, setIsClicked] = useState(false);
    const containerRef = useRef(null);
    const [isPlusClicked, setIsPlusClicked] = useState(false);
    const [isMinusClicked, setIsMinusClicked] = useState(false);
    const [isPlusMinusNavigated, setIsPlusMinusNavigated] = useState(false);
    const [scale, setScale] = useState(100); // Изначальный масштаб 100%

    const handleZoomIn = () => {
        if (scale < 200) {
            setScale(prevScale => prevScale + 10); // Увеличение масштаба на 10%
        }
    };

    const handleZoomOut = () => {
        if (scale > 100) {
            setScale(prevScale => prevScale - 10); // Уменьшение масштаба на 10%
        }
    };


    return (
        <div className={`star-map-wrapper ${isClicked ? 'clicked' : ''}`}
             ref={containerRef}
             style={{ userSelect: 'none' }}
        >
            <div
                className={`plus-minus ${isPlusMinusNavigated ? `navigated` : ``}`}
                 onMouseEnter={() => {setIsPlusMinusNavigated(true)}}
                 onMouseLeave={() => {setIsPlusMinusNavigated(false)}}>
                <div
                    className={`plus ${isMinusClicked ? 'clicked' : ''}`}
                    onClick={() => {
                        setIsPlusClicked(true);
                        setIsMinusClicked(false);
                        handleZoomIn();
                    }}
                >+</div>
                <div
                    className={`minus ${isPlusClicked ? 'clicked' : ''}`}
                    onClick={() => {
                        setIsPlusClicked(false);
                        setIsMinusClicked(true);
                        handleZoomOut();
                    }}
                >-</div>
            </div>
            <BrandDevelopmentMap scale={scale}/>
        </div>
    )
}
export default StarMapMobile;