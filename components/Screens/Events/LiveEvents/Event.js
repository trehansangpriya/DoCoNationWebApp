import React from 'react'
import eventStyle from '../../../../styles/Screens/Events/LiveEvents/Event.module.css'

const Event = ({ title, date, active, time, img, link, subtitle, tags }) => {
    return (
        <div className={eventStyle.card}>
            <div className={eventStyle.img}>
                <img src={img} alt={title} />
            </div>
            <div className={eventStyle.info}>
                <div className={eventStyle.title}>{title}</div>
                <div className={eventStyle.subtitle}>{subtitle}</div>
                <div className={eventStyle.tags}>
                    {
                        tags.map(tag => (
                            <div className={eventStyle.tag}>{tag}</div>
                        ))
                    }
                </div>
                <div className={eventStyle.datetime}>
                    {date}, {time}
                </div>
            </div>
            <div className={eventStyle.btnHolder}>
                {active ?
                    (
                        <a href={link} className="btn btn-success">Join Now</a>
                    ) :
                    (
                        <a href="https://doco.link/nation-whatsapp" className="btn btn-primary">Get Notified</a>
                    )
                }
            </div>

        </div>
    )
}

export default Event