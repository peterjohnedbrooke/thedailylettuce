import Link from 'next/link';
import './mobileNav.css';

type MobileNavProps = {
  className?: string;
  isOpen: boolean;
};

const MobileNav = ({ className, isOpen }: MobileNavProps) => {
  return (
    <nav className={`${className && className} ${isOpen && 'open'}`}>
      <ul className="mobile-nav__list">
        <li className="mobile-nav__item">
          <Link href="/" className="mobile-nav__link">
            Home
          </Link>
        </li>
        <li className="mobile-nav__item">
          <Link href="/category/politics" className="mobile-nav__link">
            Politics
          </Link>
        </li>
        <li className="mobile-nav__item">
          <Link href="/category/business" className="mobile-nav__link">
            Business
          </Link>
        </li>
        <li className="mobile-nav__item">
          <Link href="/category/sports" className="mobile-nav__link">
            Sports
          </Link>
        </li>
        <li className="mobile-nav__item">
          <Link href="/category/culture" className="mobile-nav__link">
            Culture
          </Link>
        </li>
        <li className="mobile-nav__item">
          <Link href="/category/health" className="mobile-nav__link">
            Health
          </Link>
        </li>
        {/* <li className="mobile-nav__item">
          <Link href="/category/technology" className="mobile-nav__link">
            Technology
          </Link>
        </li> */}
        {/* <li className="mobile-nav__item">
          <Link href="/category/opinion" className="mobile-nav__link">
            Opinion
          </Link>
        </li>
        <li className="mobile-nav__item">
          <Link href="/category/global" className="mobile-nav__link">
            Global
          </Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default MobileNav;
