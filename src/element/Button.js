/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

export default function Button(props) {
  const className = [props.className];
  if (props.isLarge) className.push('btn-lg');
  if (props.isSmall) className.push('btn-sm');
  if (props.hasShadow) className.push('btn-shadow');

  const onClick = () => {
    if (props.onClick) props.onClick();
  };

  if (props.type === 'link') {
    if (props.isExternal) {
      return (
        <a
          href={props.href}
          className={className.join(' ')}
          style={props.style}
          rel={props.target === '_blank' ? undefined : 'noopener noreferrer'}
          target={props.target === '_blank' ? '_blank' : undefined}
        >
          {props.children}
        </a>
      );
    } else {
      return (
        <Link
          to={props.href}
          className={className.join(' ')}
          style={props.style}
          onClick={onClick}
        >
          {props.children}
        </Link>
      );
    }
  }

  return (
    <button
      className={className.join(' ')}
      style={props.style}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

Button.propTypes = {
  className: propTypes.string,
  isLarge: propTypes.bool,
  isSmall: propTypes.bool,
  hasShadow: propTypes.bool,
  onClick: propTypes.func,
};
