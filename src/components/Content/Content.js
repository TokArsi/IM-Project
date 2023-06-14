import React, {useState} from "react";
import './content.scss'
import StarMap from "./StarMap/StarMap";

const Content = () => {
    const [isFullscreen, setIsFullscreen] = useState(false);
    return (
        <div className={`content ${isFullscreen ? 'full' : ''}`}>
            <StarMap isFullscreen={isFullscreen} setIsFullscreen={setIsFullscreen}/>
        </div>
    )
}
export default Content;