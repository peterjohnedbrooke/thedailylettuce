import React from 'react';
import './footer.css';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer>
      <div className="footer__container">
        <ul className="footer__navlist">
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/terms">Terms of Service</Link>
          </li>
          {/* <li>
            <Link href="/privacy">Privacy Policy</Link>
          </li> */}
        </ul>
        <p className="copyright-text">
          © {new Date().getFullYear()} The Smashed Lettuce
        </p>
      </div>
    </footer>
  );
};

export default Footer;
