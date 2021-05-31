import Link from 'next/link'
import navStyle from '../../styles/Layout/Nav.module.css'
import links from '../../data/navLinks.json'
import { useWebContext } from './../../contexts/WebConext';

const Nav = () => {
    const { navOpen, setNavOpen } = useWebContext()
    return (
        <nav className={navStyle.nav}>
            <div className={navStyle.logo}>
                <Link href="/#home"><a><img src="https://docogen.com/assets/Dark/DoCoNation-Alt.png" alt="" /></a></Link>
            </div>
            <div className={!navOpen ? navStyle.navLinks : navStyle.navLinks + " " + navStyle.showNav}>
                {
                    links.map(
                        link =>
                        (
                            <Link key={link.title} href={link.url}>
                                <a className={navStyle.navLink} target={link.target} onClick={e => (setNavOpen(!navOpen))} >
                                    <span>{link.title}</span>
                                </a>
                            </Link>
                        )
                    )
                }
                {/*  <a
                    href="#join"
                    className="btn btn-primary"
                    style={{
                        marginLeft: '30px'
                    }}
                >
                    Join Now
                </a>*/}
            </div>

            <div className={!navOpen ? navStyle.burger : navStyle.burger + " " + navStyle.toggle} onClick={e => (setNavOpen(!navOpen))}>
                <div className={navStyle.bar, navStyle.bar1}></div>
                <div className={navStyle.bar, navStyle.bar2}></div>
                <div className={navStyle.bar, navStyle.bar3}></div>
            </div>
        </nav>
    )
}

export default Nav