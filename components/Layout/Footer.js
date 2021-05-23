import React from 'react'
import footerStyles from '../../styles/Layout/Footer.module.css'
const Footer = () => {
    return (
        <div className={footerStyles.footer}>
            <ul className={footerStyles.socials}>
                <a href="https://www.instagram.com/docogen/" target="_blank" className={footerStyles.social}>
                    <li><i className="fab fa-instagram"></i></li>
                </a>
                <a href="https://www.linkedin.com/company/docogen" target="_blank" className={footerStyles.social}>
                    <li><i className="fab fa-linkedin"></i></li>
                </a>
                <a href="https://www.facebook.com/DotComGenerations/" target="_blank" className={footerStyles.social}>
                    <li><i className="fab fa-facebook"></i></li>
                </a>
                <a href="https://www.youtube.com/channel/UCaGdB9JGcImaBh3JXy1UUIw" target="_blank" className={footerStyles.social}>
                    <li><i className="fab fa-youtube"></i></li>
                </a>
                <a href="https://in.pinterest.com/dotcomgenerations/" target="_blank" className={footerStyles.social}>
                    <li><i className="fab fa-pinterest"></i></li>
                </a>
                <a href="https://twitter.com/_DoCoGen" target="_blank" className={footerStyles.social}>
                    <li><i className="fab fa-twitter"></i></li>
                </a>
            </ul>
            <div className={footerStyles.branding}>
                <div className={footerStyles.icon}>
                    <img src="https://docogen.com/assets/Icon/DoCoNation-Icon.png" alt="DoCoNation Icon" />
                </div>
                <div className={footerStyles.info}>
                    <img src="https://docogen.com/assets/Light/DoCoNation.png" alt="DoCoNation Logo" /> <a className={footerStyles.link} href="https://docogen.com" target="_blank">a DoCoGen Initiative</a>                 </div>

            </div>

        </div>
    )
}

export default Footer