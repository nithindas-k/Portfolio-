// ─────────────────────────────────────────────
// Button Component
// Variants: primary (sage), outline (ash), ghost
// ─────────────────────────────────────────────

import React from 'react';
import './Button.css';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  icon: Icon,
  iconPosition = 'right',
  disabled = false,
  className = '',
  ...props
}) => {
  const classes = `btn btn--${variant} btn--${size} ${className}`.trim();

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="btn__icon btn__icon--left" />}
      <span className="btn__label">{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="btn__icon btn__icon--right" />}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...props}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick} disabled={disabled} {...props}>
      {content}
    </button>
  );
};

export default Button;
