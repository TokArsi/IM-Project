import React, {useContext, useEffect, useRef, useState} from "react";
import './starmap.scss';
import BrandDevelopmentMap from "../../BrandDevelopmentMap/BrandDevelopmentMap";
import DataContext from "../../../contexts/DataContext";
import Card from "../../Cards/Cards";
import {NavBarListMobile} from "../../NavBarList/NavBarList";

const StarMap = ({setIsFullscreen, isFullscreen}) => {
    const [isNavigate, setIsNavigate] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [isHandleMouseNavigate, setIsHandleMouseNavigate] = useState(false);
    const containerRef = useRef(null);
    const [startX, setStartX] = useState(null);
    const [startY, setStartY] = useState(null);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [scrollTop, setScrollTop] = useState(0);
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



    const handleMouseDown = (event) => {
        setStartX(event.clientX);
        setStartY(event.clientY);
    };

    const handleMouseMove = (event) => {
        if (startX && startY) {
            const x = event.clientX;
            const y = event.clientY;
            const deltaX = x - startX;
            const deltaY = y - startY;
            containerRef.current.scrollLeft = scrollLeft - deltaX;
            containerRef.current.scrollTop = scrollTop - deltaY;
        }
    };

    const handleMouseUp = () => {
        setStartX(null);
        setStartY(null);
        setScrollLeft(containerRef.current.scrollLeft);
        setScrollTop(containerRef.current.scrollTop);
    };
    return (
        <div className={`star-map-wrapper ${isClicked ? 'clicked' : ''}`}
             ref={containerRef}
             onMouseDown={(e) => {if(isClicked) return handleMouseDown(e)}}
             onMouseMove={(e) => {if(isClicked) return handleMouseMove(e)}}
             onMouseUp={(e) => {if(isClicked) return handleMouseUp(e)}}
             onMouseLeave={(e) => {if(isClicked) return handleMouseUp(e)}}
             style={{ userSelect: 'none' }}
        >
            <div className={`tool-bar`}>
                <div className={`navigation ${isClicked ? `clicked` : isHandleMouseNavigate ? `navigated` : ``}`}
                     onClick={() => setIsClicked(!isClicked)}
                     onMouseEnter={() => {setIsHandleMouseNavigate(true)}}
                     onMouseLeave={() => {setIsHandleMouseNavigate(false)}}
                >
                    <img src="/images/navigation.png" alt=""/>
                </div>
            </div>
            <div className={`plus-minus ${isPlusMinusNavigated ? `navigated` : ``}`}
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
export default StarMap;