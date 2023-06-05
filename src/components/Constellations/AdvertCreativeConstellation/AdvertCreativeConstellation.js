import React from "react";
import './advertcreativeconstellation.scss';

const starCopyWriter = <img className={`star`} src="/images/constallation/advert-creative/copywriter.png" alt="star"/>
const starSMMManager = <img className={`star`} src="/images/constallation/advert-creative/smm-manager.png" alt="star"/>
const starTargetolog = <img className={`star`} src="/images/constallation/advert-creative/targetolog.png" alt="star"/>
const starCreator = <img className={`starr`} src="/images/constallation/advert-creative/creator.png" alt="star"/>
const starContentProducer = <img className={`star`} src="/images/constallation/advert-creative/content-producer.png" alt="star"/>
const starContentMarketolog = <img className={`star`} src="/images/constallation/advert-creative/content-marketolog.png" alt="star"/>
const starContentManager = <img className={`star`} src="/images/constallation/advert-creative/content-manager.png" alt="star"/>

const line1 = <img src="/images/constallation/advert-creative/line1.png" alt="" className="line-1"/>
const line2 = <img src="/images/constallation/advert-creative/line2.png" alt="" className="line-2"/>
const line3 = <img src="/images/constallation/advert-creative/line3.png" alt="" className="line-3"/>
const line4 = <img src="/images/constallation/advert-creative/line4.png" alt="" className="line-4"/>
const line5 = <img src="/images/constallation/advert-creative/line5.png" alt="" className="line-5"/>
const line6 = <img src="/images/constallation/advert-creative/line6.png" alt="" className="line-6"/>
const line7 = <img src="/images/constallation/advert-creative/line7.png" alt="" className="line-7"/>

const AdvertCreativeConstellation = () => {
    return (
        <div className="advert-creative-constellation">
            <div className="constellation">
                <div className="copy-writer">
                    {starCopyWriter}
                </div>
                {line1}
                <div className={`smm-manager`}>
                    {starSMMManager}
                </div>
                {line2}
                {line3}
                <div className={`targetolog`}>
                    {starTargetolog}
                </div>
                <div className={`creator`}>
                    {starCreator}
                </div>
                {line4}
                <div className={`content-producer`}>
                    {starContentProducer}
                </div>
                {line5}
                <div className={`content-marketolog`}>
                    {starContentMarketolog}
                </div>
                {line6}
                <div className={`content-manager`}>
                    {starContentManager}
                </div>
                {line7}
            </div>
            <div className="title">«Созвездие рекламного креатива»</div>
            <div className="sub-title">Продюсируют интересный контент в диджитал и в офлайне</div>
        </div>
    )
};
export default AdvertCreativeConstellation;