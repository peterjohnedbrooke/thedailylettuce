import React from 'react';
import './card.css';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { url } from 'inspector';

interface CardProps {
  title: string;
  description: string;
  thumbnail?: string;
  category?: string;
  featureCard?: boolean;
  index?: number;
}

const Card = ({
  title,
  description,
  thumbnail,
  category,
  featureCard,
  index,
}: CardProps) => {
  if (!title) return null;
  const isOdd = index ? index % 2 !== 0 : false;
  return (
    <div className="card">
      {thumbnail && (
        <div
          className={` ${
            featureCard
              ? 'card__image-container-featured'
              : 'card__image-container'
          }`}
        >
          <img src={thumbnail} alt={title} className={'card__image'} />
        </div>
      )}
      <div className="card__content">
        {category && (
          <p
            className={`card__category ${category.toLowerCase()} ${isOdd ? 'odd' : 'even'}`}
          >
            {category}
          </p>
        )}
        <h3 className="card__title">{title}</h3>
        {description && <p className="card__description">{description}</p>}
      </div>
    </div>
  );
};

export default Card;
