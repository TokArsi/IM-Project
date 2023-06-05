import React from "react";
import './constellationbranddevelopment.scss'
const ConstellationBrandDevelopment = () => {
    const starInfluenceMarketer = <img className={`star-influence-marketer`} src="/images/constallation/brand-development/star-brand.png" alt="star"/>
    const starBusinessDeveloper = <img className={`star-business-developer`} src="/images/constallation/brand-development/business-developer.png" alt="star"/>
    const starBrandStrategic = <img className={`star-brand-strategic`} src="/images/constallation/brand-development/star-brand.png" alt="star"/>
    const starBrandManager = <img className={`star-brand-manager`} src="/images/constallation/brand-development/star-brand.png" alt="star"/>
    const starReputationBrand = <img className={`star-reputation-brand`} src="/images/constallation/brand-development/star-brand.png" alt="star"/>

    const line = <img src="/images/constallation/brand-development/line.png" alt="" className="line"/>
    const line2 = <img src="/images/constallation/brand-development/line2.png" alt="" className="line-2"/>
    const line3 = <img src="/images/constallation/brand-development/line3.png" alt="" className="line-3"/>
    const line4 = <img src="/images/constallation/brand-development/line4.png" alt="" className="line-4"/>
    return (
        <div className="brand-development-constellation">
            <div className="title">«Созвездие развития бренда»</div>
            <div className="sub-title">Создают успешные продукты под узнаваемым брендом</div>
            <div className="constellation">
                <div className="influence-marketer">
                    {starInfluenceMarketer}
                </div>
                {line}
                <div className={`business-developer`}>
                    {starBusinessDeveloper}
                </div>
                {line2}
                <div className={`brand-strategic`}>
                    {starBrandStrategic}
                </div>
                {line3}
                {line4}
                <div  className={`brand-manager`}>
                    {starBrandManager}
                </div>
                <div  className={`reputation-brand`}>
                    {starReputationBrand}
                </div>
            </div>
        </div>
    )
}
export default ConstellationBrandDevelopment;