import React from 'react';
import './constellation.scss'

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
                        <div className="star-block">
                            <div className={'titleBlock'} style={{
                                position: 'absolute',
                                top: data.title.top,
                                left: data.title.left,
                                color: 'rgba(255, 255, 255, 0.6)',
                                fontFamily: 'Proxima Nova',
                                display: 'inline-block',
                                whiteSpace: 'break-spaces'
                            }}>{data.title.text}</div>
                            <img src={data.url} alt="star" style={{
                                position: 'absolute',
                                top: data.top,
                                left: data.left,
                            }}/>
                        </div>
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