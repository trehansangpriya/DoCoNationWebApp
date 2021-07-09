import React from 'react'
import ytStyle from '../../../../styles/Screens/Events/YtVids/YtVid.module.css'
const YtVid = ({ title, date, img, link }) => {
    return (
        <div className={ytStyle.card}>
            <div className={ytStyle.img}>
                <img src={img} alt={title} />
            </div>
            <div className={ytStyle.info}>
                <div className={ytStyle.title}>{title}</div>
                <div className={ytStyle.datetime}>
                    {date}
                </div>
            </div>
            <div className={ytStyle.btnHolder}>
                <a href={link} className="btn btn-primary">Watch Now</a>
            </div>
        </div>
    )
}

export default YtVid
