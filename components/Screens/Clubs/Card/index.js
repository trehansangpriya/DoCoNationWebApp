import React from 'react'
import style from './style.module.css'

const Card = ({ icon, name, desc, form, web }) => {
    return (
        <div className={style.card}>
            <div className={style.info}>
                <div className={style.emoji}>
                    <img src={icon} alt="" />
                </div>
                <div className={style.details}>
                    <div className={style.name}>
                        {name}
                    </div>
                    <div className={style.desc}>
                        {desc}
                    </div>
                </div>
            </div>
            <div className={style.btnRow}>
                {web &&
                    <a href={web} className={style.btn + " " + style.btnSecondary}>Know More</a>
                }
                <a href={form} className={style.btn + " " + style.btnPrimary}>Join Now</a>
            </div>
        </div>
    )
}

export default Card
