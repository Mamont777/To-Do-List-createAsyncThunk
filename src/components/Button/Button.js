import React from 'react';
import clsx from 'clsx';
import css from './Button.module.css';

export const Button = ({ selected, children, type, ...otherProps }) => {
  return (
    <button
      className={clsx(css.btn, {
        [css.isSelected]: selected,
      })}
      type={type}
      {...otherProps}
    >
      {children}
    </button>
  );
};
