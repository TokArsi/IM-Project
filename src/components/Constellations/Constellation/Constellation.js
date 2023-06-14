import React, {useContext, useEffect, useState} from 'react';
import DataContext from "../../../contexts/DataContext";
import nextId from "react-id-generator";

const Constellation = ({ starData, constellationBlockSize, lineData, directionType }) => {
    const [url, setUrl] = useState('');
    const [starArray, setStarArray] = useState([]);
    const {
        brandManagement,
        advertPublic,
        digitalMarketingCommunication,
        promotionMarketingCommunication,
        marketing
    } = useContext(DataContext);

    const directionObject = {
        advertPublicCommunications: advertPublic,
        digitalMarketingCommunications: digitalMarketingCommunication,
        promotionNewBusiness: promotionMarketingCommunication,
        brandManagement: brandManagement,
        marketing: marketing
    };

    const setNewUrl = (starData, direction) => {
        let index = directionType.indexOf(direction);
        const url = starData[index].url;
        if(!starArray.includes(starData[index].id))
        {
            starData[index].url = url.replace('.png', '-active.png');
            setStarArray(prevState => [...prevState, starData[index].id]);
            setUrl(url);
        }
    };

    const setOldUrl = (starData, direction) => {
        let index = directionType.indexOf(direction);
        const url = starData[index].url;
        if(url.includes('-active.png'))
        {
            let count = 0;
            starData[index].directions.map(item => {
                if(directionType[index][item] && directionObject[item])
                    count--;
            })
            if(count < 2) {
                setUrl(url);
                starData[index].url = url.replace('-active.png', '.png');
                setStarArray(prevState => prevState.filter(id => id !== starData[index].id));
            }
        }
    };

    useEffect(() => {
        directionType.forEach(direction => {
            if (direction.brandManagement && brandManagement) {
                setNewUrl(starData, direction);
            } else if (direction.advertPublicCommunications && advertPublic) {
                setNewUrl(starData, direction);
            } else if (direction.digitalMarketingCommunications && digitalMarketingCommunication) {
                setNewUrl(starData, direction);
            } else if (direction.promotionNewBusiness && promotionMarketingCommunication) {
                setNewUrl(starData, direction);
            } else if (direction.marketing && marketing) {
                setNewUrl(starData, direction);
            } else {
                setOldUrl(starData, direction);
            }
        });
    }, [brandManagement, advertPublic, digitalMarketingCommunication, promotionMarketingCommunication, marketing]);

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
                                display: 'inline-block'
                            }}>{data.title.text}</div>
                            <div>
                                <img src={data.url} alt="star" style={{
                                    position: 'absolute',
                                    top: data.top,
                                    left: data.left,
                                }}/>
                            </div>
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