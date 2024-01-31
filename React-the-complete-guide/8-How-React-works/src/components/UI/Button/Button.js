import React from 'react';

import classes from './Button.module.css';

// Button component which can be reused throughout the application
// Accepts props to customize type, styling, click behavior, and disable state
const Button = (props) => {
  console.log('Button RUNNING');
  // Destructure props for cleaner access to values
  const { type = 'button', className, onClick, disabled, children } = props;

  return (
    // Render a button element with dynamic properties based on passed props
    <button
      type={type}
      className={`${classes.button} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default React.memo(Button);
