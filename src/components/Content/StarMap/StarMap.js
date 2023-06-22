import React, {useContext, useEffect, useRef, useState} from "react";
import './starmap.scss';
import BrandDevelopmentMap from "../../BrandDevelopmentMap/BrandDevelopmentMap";
import DataContext from "../../../contexts/DataContext";
import Card from "../../Cards/Cards";
import {NavBarListMobile} from "../../NavBarList/NavBarList";

const StarMap = () => {
    const [isClicked, setIsClicked] = useState(false);
    const [isHandleMouseNavigate, setIsHandleMouseNavigate] = useState(false);
    const containerRef = useRef(null);
    const [startX, setStartX] = useState(null);
    const [startY, setStartY] = useState(null);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [scrollTop, setScrollTop] = useState(0);
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
            <BrandDevelopmentMap/>
        </div>
    )
}
export default StarMap;