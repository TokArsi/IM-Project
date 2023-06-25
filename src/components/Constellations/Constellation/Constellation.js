import React, {useContext, useEffect, useState} from 'react';
import DataContext from "../../../contexts/DataContext";
import './constellation.scss'

const Constellation = ({ starData, constellationBlockSize, lineData, directionType }) => {
    const [url, setUrl] = useState('');
    const [starArray, setStarArray] = useState([]);
    const {
        brandManagement,
        advertPublic,
        digitalMarketingCommunication,
        promotionMarketingCommunication,
        marketing, isStarActive, setIsStarActive,
        setStarName, isStarNavigated,
        setIsStarNavigated
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
            starData[index].url = url.replace('.svg', '-active.svg');
            setStarArray(prevState => [...prevState, starData[index].id]);
            setUrl(url);
        }
    };

    const setOldUrl = (starData, direction) => {
        let index = directionType.indexOf(direction);
        const url = starData[index].url;
        if(url.includes('-active.svg'))
        {
            let count = 0;
            starData[index].directions.map(item => {
                if(directionType[index][item] && directionObject[item])
                    count--;
            })
            if(count < 2) {
                setUrl(url);
                starData[index].url = url.replace('-active.svg', '.svg');
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
        starData.map(star => {
            if(Object.values(isStarActive).filter(item => item === true).length > 0) {
                if(isStarActive[star.id]) {
                    setStarName(star.title.text);
                }
            } else setStarName(null);
        })
    }, [brandManagement, advertPublic, digitalMarketingCommunication, promotionMarketingCommunication, marketing, isStarActive]);

    return (
        <div className="consellation" style={{position: 'relative', width: constellationBlockSize.width, height: constellationBlockSize.height}}>
            {
                starData.map(data => {
                    return (
                        <div key={data.id} className="star-block"
                        >
                            <div className={'titleBlock'} style={{
                                position: 'absolute',
                                top: data.title.top,
                                left: data.title.left,
                                color: 'rgba(255, 255, 255, 0.6)',
                                fontFamily: 'Proxima Nova, sans-serif',
                                width: '30%',
                                zIndex: 9998,
                                cursor: "pointer",
                                fontSize: 16,
                                opacity: 100
                            }}
                                 onClick={e => {
                                     setIsStarActive(prevState => {
                                         // Создаем новый объект, где все значения устанавливаются в false
                                         const newState = Object.keys(prevState).reduce((acc, key) => {
                                             acc[key] = false;
                                             return acc;
                                         }, {});
                                         newState[data.id] = !prevState[data.id];
                                         return newState;
                                     });
                                 }}
                            >{data.title.text}</div>
                            <div onClick={e => {
                                setIsStarActive(prevState => {
                                    // Создаем новый объект, где все значения устанавливаются в false
                                    const newState = Object.keys(prevState).reduce((acc, key) => {
                                        acc[key] = false;
                                        return acc;
                                    }, {});
                                    newState[data.id] = !prevState[data.id];
                                    return newState;
                                });
                            }}
                                 onMouseEnter={e => {
                                     setIsStarNavigated(prevState => {
                                         // Создаем новый объект, где все значения устанавливаются в false
                                         const newState = Object.keys(prevState).reduce((acc, key) => {
                                             acc[key] = false;
                                             return acc;
                                         }, {});
                                         newState[data.id] = true;
                                         return newState;
                                     });
                                 }}
                                 onMouseLeave={e => {
                                     setIsStarNavigated(prevState => {
                                         // Создаем новый объект, где все значения устанавливаются в false
                                         const newState = Object.keys(prevState).reduce((acc, key) => {
                                             acc[key] = false;
                                             return acc;
                                         }, {});
                                         newState[data.id] = false;
                                         return newState;
                                     });
                                 }}
                                className={`${isStarActive[data.id] ? `star-active` : isStarNavigated[data.id] ? 'star-navigated' : ''}`}
                                style={{margin: '0 auto',
                                    position: 'absolute',
                                    width: 46,
                                    height: 46,
                                    top: data.top - 12,
                                    left: data.left - 11,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    cursor: 'pointer',
                                    zIndex: 9999
                                }}
                                >
                                <img src={data.url}
                                    alt="star"
                                    style={{
                                        zIndex: 9997,
                                        transform: data.transform,
                                    }}
                                />
                            </div>
                        </div>
                    )
                })
            }
            {
                lineData.map((data, index) => {
                    return (
                        <img src={data.url} alt={'line'} key={index} style={{position: "absolute", top: data.top, left: data.left, zIndex: -1}}></img>
                    )
                })
            }
        </div>
    );
};

export default Constellation;