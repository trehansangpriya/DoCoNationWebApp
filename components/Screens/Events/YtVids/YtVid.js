import React from 'react'
import ytStyle from '../../../../styles/Screens/Events/YtVids/YtVid.module.css'
const YtVid = ({ title, date, img, link, tags, subtitle }) => {
    return (
        <div className={ytStyle.card}>
            <div className={ytStyle.img}>
                <img src={img} alt={title} />
            </div>
            <div className={ytStyle.info}>
                <div className={ytStyle.title}>{title}</div>
                <div className={ytStyle.subtitle}>{subtitle}</div>
                <div className={ytStyle.tags}>
                    {
                        tags.map(tag => (
                            <div className={ytStyle.tag}>{tag}</div>
                        ))
                    }
                </div>
            </div>
            <div className={ytStyle.btnHolder}>
                <a href={link} target='_blank' className="btn btn-success">Watch Now</a>
            </div>
        </div>
    )
}

export default YtVid
