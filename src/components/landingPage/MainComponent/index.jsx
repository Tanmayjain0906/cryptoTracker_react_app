import React from 'react'
import Button from "../../Common/Button"
import iphone from "../../../assets/phone.svg"
import gradient from "../../../assets/gradient.svg"
import "./style.css"

function MainComponent() {
    return (
        <div className='main-container'>
            <div className='left-info'>
                <h1 className='head-1'>Track Crypto</h1>
                <h1 className='head-2'>Real Time.</h1>
                <p className='info'>Track crypto through a public api in real time. Visit the dashboard to do so!</p>
                <div className='button-container'>
                    <Button text={"Dashboard"} />
                    <Button text={"Share"} outline={true} />
                </div>
            </div>
            <div className='phone-container'>
                <img src={iphone} className='iphone' />
                <img src={gradient} className='gradient' />
            </div>
        </div>
    )
}

export default MainComponent