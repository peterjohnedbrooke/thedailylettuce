import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import './header.css';
import { Mea_Culpa } from 'next/font/google';
import Icon from '../icon/icon';
import SearchInput from '../search/searchInput';
import Hamburger from 'hamburger-react';
import MobileNav from './mobileNav/mobileNav';

type HeaderProps = {
  toggleTheme?: () => void;
  theme?: string;
};

const meaCulpa = Mea_Culpa({ weight: '400', subsets: ['latin'] });

const Header = ({ toggleTheme, theme }: HeaderProps) => {
  const [isOpen, setOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const hamburgerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (hamburgerRef.current && hamburgerRef.current.contains(event.target)) {
        return;
      } else if (
        headerRef.current &&
        !headerRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className={`header`}>
      <div className="header__container">
        <div className="header__top-container">
          <div className="header__logo-container">
            <Link href="/" className="header__logo-link">
              <h1 className={`header__title`}>
                <span className="header-title-prefix">The</span>
                Daily Lettuce
              </h1>
            </Link>
            {/* <p className="header__subtitle">No agenda, no bias, no idea</p> */}
          </div>
          <div className="header__icon-container">
            {/* <SearchInput />
            <button className="header__login-button">
              <Link href="/login" className="header__login-link">
                <Icon icon="account" size={24} />
              </Link>
            </button> */}
            <div className="hamburger-icon" ref={hamburgerRef}>
              <Hamburger size={30} toggled={isOpen} toggle={setOpen} />
            </div>
          </div>
        </div>
      </div>
      <div ref={headerRef}>
        <MobileNav
          className={`header__mobile-nav ${isOpen ? 'open' : 'closed'}`}
          isOpen={isOpen}
        />
      </div>
    </header>
  );
};

export default Header;
