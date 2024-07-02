interface ColorsTheme {
  default: {
    primary: string;
    secondary: string;
    error: string;
    warning: string;
    info: string;
    success: string;
    background: string;
    text: string;
  };
  brand: {
    limeGreen: string;
    blueViolent: string;
    orange: string;
  };
}

const colors: ColorsTheme = {
  default: {
    primary: '#007bff',
    secondary: '#6c757d',
    error: '#dc3545',
    warning: '#ffc107',
    info: '#17a2b8',
    success: '#28a745',
    background: '#f8f9fa',
    text: '#212529',
  },
  brand: {
    limeGreen: '#32CD32',
    blueViolent: '#8A2BE2',
    orange: '#FFA500',
  },
};

export default colors;
