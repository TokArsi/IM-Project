import React, {useContext, useState} from "react";
import './content.scss'
import StarMap from "./StarMap/StarMap";
import DataContext from "../../contexts/DataContext";

const Content = () => {
    const {isFullscreen, setIsFullscreen} = useContext(DataContext);
    return (
        <div className={`content`}>
            <StarMap isFullscreen={isFullscreen} setIsFullscreen={setIsFullscreen}/>
        </div>
    )
}
export default Content;