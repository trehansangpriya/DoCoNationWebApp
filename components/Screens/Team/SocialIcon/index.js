import React from 'react'
import style from './style.module.css'
const SocialIcon = ({ url, icon }) => {
    return (
        <div className={style.icon}>
            <a href={url} target="_blank">
                <i className={icon}></i>
            </a>
        </div>
    )
}

export default SocialIcon
