import React from 'react';
import { Stage, Layer, Line, Image } from 'react-konva';

const Constellation = ({ starData, parentSize, constellationBlockSize, lineData }) => {
    console.log(starData)
    console.log(parentSize)
    // const setRelativeStarPositions = (starData, parentSize) => {
    //     return starData.map((data) => {
    //         const relativePositionTop = (data.top / parentSize.x) * 100;
    //         const relativePositionLeft = (data.left / parentSize.y) * 100;
    //         return { top: relativePositionTop, left: relativePositionLeft, url: data.url };
    //     });
    // };

    // const relativeStarPositions = setRelativeStarPositions(starData, parentSize);

    // const linePoints = starData.flatMap((position) => [position.top, position.left]);

    return (
        <div className="consellation" style={{position: 'relative', width: constellationBlockSize.width, height: constellationBlockSize.height}}>
            {
                starData.map(data => {
                    return (
                        <img src={data.url} alt="star" style={{
                            position: 'absolute',
                            top: data.top,
                            left: data.left,
                        }}/>
                    )
                })
            }
            {
                lineData.map(data => {
                    return (
                        <img src={data.url} alt={'line'} style={{position: "absolute", top: data.top, left: data.left}}></img>
                    )
                })
            }
        </div>
    );
};

export default Constellation;