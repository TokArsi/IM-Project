import React, {useContext, useEffect, useState} from "react";
import './content.scss'
import StarMap from "./StarMap/StarMap";
import DataContext from "../../contexts/DataContext";
import {NavBarListMobile} from "../NavBarList/NavBarList";
import StarMapMobile from "./StarMap/StarMapMobile";
import Card from "../Cards/Cards";

const Content = () => {
    const {isFullscreen, setIsFullscreen} = useContext(DataContext);
    const {
        starName, setStarName, setIsStarActive,
    } = useContext(DataContext);
    useEffect(() => {
        if(starName !== null)
            setStarName(starName)
        else setStarName(null)
    }, [starName])
    return (
        <div className={`content`}>
            <StarMap isFullscreen={isFullscreen} setIsFullscreen={setIsFullscreen}/>
            {starName !== null ? <Card name={starName} setIsStarActive={setIsStarActive}/> : null}
        </div>
    )
}
export default Content;

export const ContentMobile = () => {
    const {
        starName, setStarName, setIsStarActive,
    } = useContext(DataContext);
    useEffect(() => {
        if(starName !== null)
            setStarName(starName)
        else setStarName(null)
    }, [starName])
    return (
        <div className={`content`}>
            <StarMapMobile/>
            {starName !== null ? <Card name={starName} setIsStarActive={setIsStarActive}/> : null}
        </div>
    )
}