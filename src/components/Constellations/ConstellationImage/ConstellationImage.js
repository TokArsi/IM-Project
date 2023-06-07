import React from "react";

const starPressSuperVisor = <img className={`white-star`} src="/images/constallation/Image/yellowStar.png" alt="star"/>
const starPressHelper = <img className={`white-star`} src="/images/constallation/Image/yellowStar.png" alt="star"/>
const starPRManager = <img className={`star-account-manager`} src="/images/constallation/Image/pr-manager.png" alt="star"/>
const starSpeechWriter = <img className={`star-account-manager`} src="/images/constallation/Image/speechwriter.png" alt="star"/>
const starGRManager = <img className={`star-advert-strategic`} src="/images/constallation/Image/gr-manager.png" alt="star"/>

const line1 = <img src="/images/constallation/Image/line1.png" alt="" className="line-1"/>
const line2 = <img src="/images/constallation/Image/line2.png" alt="" className="line-2"/>
const line3 = <img src="/images/constallation/Image/line3.png" alt="" className="line-3"/>
const line4 = <img src="/images/constallation/Image/line4.png" alt="" className="line-4"/>

const ConstellationImage = () => {
    return (
        <div className="image-constellation">
            <div className="constellation">
                <div className="press-supervisor">
                    {starPressSuperVisor}
                </div>
                {line1}
                <div className={`press-helper`}>
                    {starPressHelper}
                </div>
                {line2}
                <div className={`pr-manager`}>
                    {starPRManager}
                </div>
                {line3}
                <div className={`speech-writer`}>
                    {starSpeechWriter}
                </div>
                {line4}
                <div className={`gr-manager`}>
                    {starGRManager}
                </div>
            </div>
            <div className="title">«Созвездие маркетинговой аналитики»</div>
            <div className="sub-title">Исследуют показатели рынка, потребителей и конкурентов</div>
        </div>
    )
};
export default ConstellationImage;