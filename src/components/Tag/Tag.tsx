import styles from './Tag.module.css';
import React from 'react';
import { TagProps } from './Tag.props';
import cn from 'classnames';

export const Tag = ({text, color, triangle, ...props}: TagProps): JSX.Element => {
  return (
    <button className={cn(styles.tag, {[styles.bright]: color === 'bright', [styles.light]: color === 'light',  [styles.triangleRight]: triangle === "right"})} {...props}
    ><div>{text}</div></button>
  );
}