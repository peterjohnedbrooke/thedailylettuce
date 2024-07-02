import React from 'react';

import { icons } from './icon.dictionary';

export type IconProps = {
  className?: string;
  icon: keyof typeof icons;
  size?: number | undefined;
};

const Icon = ({ className, icon, size }: IconProps) => {
  if (!icon) return null;
  const IconComponent = icons[icon];
  return (
    <IconComponent
      className={`icon ${icon ? `icon--${icon}` : ''} ${className ?? ''}`}
      aria-hidden={true}
      focusable="false"
      width={size ? size : undefined}
      height={size ? size : undefined}
    />
  );
};

export default Icon;
