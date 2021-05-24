import { useEffect, useRef } from 'react';
import { useWebContext } from '../../contexts/WebConext';
import DetailRC from '../Utilities/DetailRC';
import Footer from './Footer';
import Meta from './Meta';
import Nav from './Nav';

const Layout = ({ children, title, kw, desc }) => {
  const { setNavOpen } = useWebContext();
  const screen = useRef();
  const handleClick = (e) => {
    if (screen.current.contains(e.target)) {
      setNavOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  return (
    <main>
      <Meta title={title} kw={kw} desc={desc} />
      <Nav />
      <div ref={screen}>
        <div className="space"></div>
        {children}
        <div className="space"></div>
      </div>
      <DetailRC title={title} />
      <Footer />
    </main>
  );
};

export default Layout;
