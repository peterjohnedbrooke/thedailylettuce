interface Breakpoint {
  min: number;
  max: number;
}

interface Breakpoints {
  mobile: Breakpoint;
  laptop: Breakpoint;
  desktop: Breakpoint;
}

const breakpoints: Breakpoints = {
  mobile: {
    min: 320,
    max: 767,
  },
  laptop: {
    min: 768,
    max: 1023,
  },
  desktop: {
    min: 1024,
    max: Infinity,
  },
};

export default breakpoints;