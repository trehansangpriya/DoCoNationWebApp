import React from 'react'
import footerStyles from '../../styles/Layout/Footer.module.css'
const Footer = () => {
    return (
        <div className={footerStyles.footer}>
            <ul className={footerStyles.socials}>
                <a href="https://www.instagram.com/doconation/" target="_blank" className={footerStyles.social}>
                    <li><i className="fab fa-instagram"></i></li>
                </a>
                <a href="https://www.linkedin.com/company/doconation" target="_blank" className={footerStyles.social}>
                    <li><i className="fab fa-linkedin"></i></li>
                </a>
                <a href="https://www.facebook.com/Do-Co-Nation-100333282330475" target="_blank" className={footerStyles.social}>
                    <li><i className="fab fa-facebook"></i></li>
                </a>
                <a href="https://doco.link/youtube" target="_blank" className={footerStyles.social}>
                    <li><i className="fab fa-youtube"></i></li>
                </a>
                <a href="https://twitter.com/doconation" target="_blank" className={footerStyles.social}>
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