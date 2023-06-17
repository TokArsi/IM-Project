import React, {useContext, useEffect, useRef, useState} from "react";
import './starmap.scss';
import BrandDevelopmentMap from "../../BrandDevelopmentMap/BrandDevelopmentMap";
import DataContext from "../../../contexts/DataContext";
import Card from "../../Cards/Cards";

const StarMap = ({setIsFullscreen, isFullscreen}) => {
    const [isNavigate, setIsNavigate] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [isHandleMouseNavigate, setIsHandleMouseNavigate] = useState(false);
    const containerRef = useRef(null);
    const [startX, setStartX] = useState(null);
    const [startY, setStartY] = useState(null);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [scrollTop, setScrollTop] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const {
        starName, setStarName,
        isStarActive, setIsStarActive,
    } = useContext(DataContext);

    useEffect(() => {
        if(starName !== null)
            setStarName(starName)
        else setStarName(null)
    }, [starName])

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
                <div className={`fullscreen ${isFullscreen ? `clicked` : isNavigate ? `navigated` : ``}`}
                     onClick={() => setIsFullscreen(!isFullscreen)}
                     onMouseEnter={() => setIsNavigate(true)}
                     onMouseLeave={() => setIsNavigate(false)}
                >
                    <img src="/images/fullscreen.png" alt=""/>
                </div>
            </div>
            <div className={`plus-minus ${isClicked ? `clicked` : isHandleMouseNavigate ? `navigated` : ``}`}
                 onClick={() => setIsClicked(!isClicked)}
                 onMouseEnter={() => {setIsHandleMouseNavigate(true)}}
                 onMouseLeave={() => {setIsHandleMouseNavigate(false)}}>
                    <div className={`plus`}>+</div>
                    <div className={`minus`}>-</div>
            </div>
            <BrandDevelopmentMap/>
            {starName !== null ? <Card name={starName} setStarName={setStarName}/> : null}
        </div>
    )
}
export default StarMap;