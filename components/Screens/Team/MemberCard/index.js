import React from 'react'
import SocialIcon from '../SocialIcon'
import style from './style.module.css'
const MemberCard = ({ name, hashtag, image, links, quote }) => {
    return (
        <div className={style.card} >
            <div className={style.visible}>
                <div className={style.info}>
                    <div className={style.image}>
                        <img src={image} alt={name} />
                    </div>

                    <div className={style.name}>{name}</div>
                    <div className={style.hashtag}>#{hashtag}</div>
                </div>
                <div className={style.icons}>
                    {
                        links.map((link, index) =>
                        (
                            <SocialIcon
                                key={index}
                                url={link.url}
                                icon={link.icon}
                            />
                        )
                        )
                    }
                </div>
            </div>
            <div className={style.hidden}>
                <div className={style.quote}>
                    <div className={style.quoteText}>"{quote}"</div>
                </div>
            </div>
        </div>
    )
}

export default MemberCard
