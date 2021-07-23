import React from 'react'
import SocialIcon from '../SocialIcon'
import style from './style.module.css'
const MemberCard = ({ name, hashtag, image, quote, instagram, linkedin, github, twitter, portfolio }) => {
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
                        github && <SocialIcon
                            key='github'
                            url={github}
                            icon='fab fa-github'
                        />
                    }
                    {
                        instagram && <SocialIcon
                            key='instagram'
                            url={instagram}
                            icon='fab fa-instagram'
                        />
                    }
                    {
                        linkedin && <SocialIcon
                            key='linkedin'
                            url={linkedin}
                            icon='fab fa-linkedin'
                        />
                    }
                    {
                        twitter && <SocialIcon
                            key='twitter'
                            url={twitter}
                            icon='fab fa-twitter'
                        />
                    }
                    {
                        portfolio && <SocialIcon
                            key='portfolio'
                            url={portfolio}
                            icon='fas fa-link'
                        />
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
