import React from "react";

const starMarketingAnalytic = <img className={`white-star`} src="/images/constallation/marketing-analytics/marketing.png" alt="star"/>
const starPerformanceMarketing = <img className={`white-star`} src="/images/constallation/marketing-analytics/marketing.png" alt="star"/>
const starAdvertManager = <img className={`star-account-manager`} src="/images/constallation/marketing-analytics/account-manager.png" alt="star"/>
const starAccountManager = <img className={`star-account-manager`} src="/images/constallation/marketing-analytics/account-manager.png" alt="star"/>
const starAdvertStrategic = <img className={`star-advert-strategic`} src="/images/constallation/marketing-analytics/advert-strategic.png" alt="star"/>
const starMarketingManager = <img className={`white-star`} src="/images/constallation/marketing-analytics/marketing.png" alt="star"/>
const starSpecialistResearch = <img className={`white-star`} src="/images/constallation/marketing-analytics/marketing.png" alt="star"/>
const starManagerSuperVisor = <img className={`white-star`} src="/images/constallation/marketing-analytics/marketing.png" alt="star"/>
const starMarketingDirector = <img className={`white-star`} src="/images/constallation/marketing-analytics/marketing.png" alt="star"/>

const line1 = <img src="/images/constallation/marketing-analytics/line1.png" alt="" className="line-1"/>
const line2 = <img src="/images/constallation/marketing-analytics/line2.png" alt="" className="line-2"/>
const line3 = <img src="/images/constallation/marketing-analytics/line3.png" alt="" className="line-3"/>
const line4 = <img src="/images/constallation/marketing-analytics/line4.png" alt="" className="line-4"/>
const line5 = <img src="/images/constallation/marketing-analytics/line5.png" alt="" className="line-5"/>
const line6 = <img src="/images/constallation/marketing-analytics/line6.png" alt="" className="line-6"/>
const line7 = <img src="/images/constallation/marketing-analytics/line7.png" alt="" className="line-7"/>
const ConstellationMarketingAnalytics = () => {
        return (
            <div className="marketing-analytics-constellation">
                <div className="title">«Созвездие маркетинговой аналитики»</div>
                <div className="sub-title">Исследуют показатели рынка, потребителей и конкурентов</div>
                <div className="constellation">
                    <div className="marketing-analytic">
                        {starMarketingAnalytic}
                    </div>
                    {line1}
                    <div className={`perfomance-marketing`}>
                        {starPerformanceMarketing}
                    </div>
                    {line2}
                    <div className={`advert-manager`}>
                        {starAdvertManager}
                    </div>
                    {line3}
                    {line4}
                    <div className={`account-manager`}>
                        {starAccountManager}
                    </div>
                    <div className={`advert-strategic`}>
                        {starAdvertStrategic}
                    </div>
                    {line5}
                    <div className={`marketing-manager`}>
                        {starMarketingManager}
                    </div>
                    {line6}
                    {line7}
                    <div className={`specialist-research`}>
                        {starSpecialistResearch}
                    </div>
                    <div className={`marketing-supervisor`}>
                        {starManagerSuperVisor}
                    </div>
                    {line7}
                    <div className={`marketing-director`}>
                        {starMarketingDirector}
                    </div>
                </div>
            </div>
        )
};
export default ConstellationMarketingAnalytics;