import React from 'react';

export const email = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      //   fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8 11H32V14.75L20 23L8 14.75V11ZM8 29V16.5688L19.1516 24.2375L20 24.8187L20.8484 24.2328L32 16.5688V29H8Z"
        fill="currentColor"
      />
    </svg>
  );
};
