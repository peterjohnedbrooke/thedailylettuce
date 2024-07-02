'use client';
import React from 'react';
import Icon from '../icon/icon';
import './sharing.css';
import { icons } from '../icon/icon.dictionary';

type SocialSharingProps = {
  options?: {
    title: string;
    icon: keyof typeof icons;
    url: string;
  }[];
};

const Sharing = () => {
  const defaultOptions: SocialSharingProps['options'] = [
    {
      title: 'Email',
      icon: 'email',
      url: 'mailto:?subject=Check out this article&body=',
    },
    {
      title: 'Facebook',
      icon: 'facebook',
      url: 'https://www.facebook.com/sharer.php?u=',
    },
    {
      title: 'Twitter',
      icon: 'twitter',
      url: 'https://twitter.com/intent/tweet?url=',
    },
  ];

  return (
    <div className="sharing-container">
      <h5>Share This Page</h5>
      <div className="sharing-buttons">
        {defaultOptions.map((option, index) => (
          <button
            key={index}
            onClick={() =>
              window.open(
                option.url + encodeURIComponent(document.location.href),
                `${option.title}-share-dialog`,
                'width=800,height=600',
              )
            }
          >
            <Icon icon={option.icon as keyof typeof icons} size={24} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sharing;
