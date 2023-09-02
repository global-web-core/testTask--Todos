import styles from './Main.module.css';
import {TodosList} from '../../components';
import React from 'react';

export const Main = (): JSX.Element => {
  return (
    <>
      <div className={styles.main}>
        <TodosList/>
      </div>
    </>
  );
}