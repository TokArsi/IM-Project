import React from "react";
import './constellationbranddevelopment.scss'
const ConstellationBrandDevelopment = () => {
    const starInfluenceMarketer = <img className={`star-influence-marketer`} src="/images/constallation/brand-development/star-brand.png" alt="star"/>
    const starBusinessDeveloper = <img className={`star-business-developer`} src="/images/constallation/brand-development/star-brand.png" alt="star"/>
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
                <svg width="360" height="135" viewBox="0 0 360 135" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="-0.469648" x2="132.362" y2="-0.469648" transform="matrix(0.731279 -0.682079 0.68049 0.732758 10.627 122.627)" stroke="white" strokeWidth="0.939295" strokeDasharray="1.88 1.88"/>
                    <line y1="-0.469648" x2="68.2868" y2="-0.469648" transform="matrix(0.996433 -0.084389 0.0840251 0.996464 107.424 32.3447)" stroke="white" strokeWidth="0.939295" strokeDasharray="1.88 1.88"/>
                    <line y1="-0.469648" x2="116.244" y2="-0.469648" transform="matrix(0.848387 0.529377 -0.527719 0.849419 175.561 27.4746)" stroke="white" strokeWidth="0.939295" strokeDasharray="1.88 1.88"/>
                    <line y1="-0.469648" x2="173.091" y2="-0.469648" transform="matrix(0.996086 -0.0883851 0.0880042 0.99612 175.561 27.4746)" stroke="white" strokeWidth="0.939295" strokeDasharray="1.88 1.88"/>
                    <path d="M11.7537 112.498L14.3351 120.114H22.6888L15.9305 124.821L18.512 132.437L11.7537 127.73L4.99533 132.437L7.57678 124.821L0.818457 120.114H9.1722L11.7537 112.498Z" fill="#EDEDED"/>
                    <path d="M178.016 15.2334L180.598 22.8494H188.952L182.193 27.5563L184.775 35.1723L178.016 30.4654L171.258 35.1723L173.839 27.5563L167.081 22.8494H175.435L178.016 15.2334Z" fill="#EDEDED"/>
                    <path d="M273.477 77.4189L276.059 85.0349H284.412L277.654 89.7419L280.236 97.3579L273.477 92.6509L266.719 97.3579L269.3 89.7419L262.542 85.0349H270.896L273.477 77.4189Z" fill="#EDEDED"/>
                    <path d="M348.257 0.883755L350.838 8.49977H359.192L352.433 13.2067L355.015 20.8227L348.257 16.1158L341.498 20.8227L344.08 13.2067L337.321 8.49977H345.675L348.257 0.883755Z" fill="#EDEDED"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M108.877 30.7559L107.695 20.7726L106.516 30.7332L102.186 27.2994L105.559 31.6078L95.716 32.7782L105.654 33.9599L102.163 38.3814L106.531 34.9474L107.695 44.7837L108.86 34.9468L113.221 38.405L109.741 33.9594L119.675 32.7782L109.858 31.6109L113.244 27.323L108.877 30.7559Z" fill="white"/>
                </svg>
                {/*<div className="influence-marketer">*/}
                {/*    {starInfluenceMarketer}*/}
                {/*</div>*/}
                {/*{line}*/}
                {/*<div className={`business-developer`}>*/}
                {/*    {starBusinessDeveloper}*/}
                {/*</div>*/}
                {/*{line2}*/}
                {/*<div className={`brand-strategic`}>*/}
                {/*    {starBrandStrategic}*/}
                {/*</div>*/}
                {/*{line3}*/}
                {/*{line4}*/}
                {/*<div  className={`brand-manager`}>*/}
                {/*    {starBrandManager}*/}
                {/*</div>*/}
                {/*<div  className={`reputation-brand`}>*/}
                {/*    {starReputationBrand}*/}
                {/*</div>*/}
            </div>
        </div>
    )
}
export default ConstellationBrandDevelopment;