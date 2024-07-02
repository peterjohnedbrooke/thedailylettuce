import React from 'react';
import Layout from '@/app/layout/layout';
import './about-page.css';
import guy from './images/guy.jpg';
import john from './images/krusty.png';

async function AboutPage() {
  return (
    <Layout>
      <div className="about__container">
        <h1 className="about__title">About Us</h1>
        <p className="about__description">
          Welcome to The Daily Lettuce! We are dedicated to providing you with
          the latest news and insights. Our team works tirelessly to bring you
          quality content and keep you informed on the most pressing issues.
        </p>
        <p className="about__description">
          Our mission is to create a platform where readers can find reliable
          and up-to-date information on a variety of topics. Whether you're
          interested in technology, health, or entertainment, we've got you
          covered.
        </p>
        <h2 className="about__team-title">Meet Our Team</h2>
        <div className="about__team">
          <div className="about__team-member">
            <img src={guy.src} alt="Guy Incognito" className="member__image" />
            <h3 className="member__name">Guy Incognito</h3>
            <p className="member__role">Editor-in-Chief</p>
            <p className="member__bio">
              Guy has been leading our editorial team for over five years,
              ensuring that our content meets the highest standards of quality
              and integrity.
            </p>
          </div>
          <div className="about__team-member">
            <img src={john.src} alt="John Doe" className="member__image" />
            <h3 className="member__name">John Doe</h3>
            <p className="member__role">Senior Writer</p>
            <p className="member__bio">
              With a passion for storytelling, John specializes in crafting
              detailed articles that engage and inform our readers.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AboutPage;
