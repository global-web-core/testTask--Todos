import styles from './Avatar.module.css';
import iconAvatar from './Avatar.svg';
import React from 'react';

export const Avatar = (): JSX.Element => {
  return (
    <img className={styles.avatar} src={iconAvatar} alt="Avatar"/>
  );
}