import styles from './Todo.module.css';
import {Avatar, Tag} from '../../components';
import React, {useEffect, useState} from 'react';
import {faker} from '@faker-js/faker';
import {Helpers} from '../../globals';
import {TodoProps} from './Todo.props';

export const Todo = ({title, completed}: TodoProps): JSX.Element => {
  const [titleTodo, setTitleTodo] = useState('')
  const [description, setDescription] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [isCompleted, setIsCompleted] = useState(completed);
  const [tagBright, setTagBright] = useState('');
  const [tagLight, setTagLight] = useState('');

  const generateData = () => {
    setDescription(faker.lorem.text());
    setStartDate(Helpers.getDate());
    setEndDate(Helpers.getDate());
    setTagBright(Helpers.capitalizeFirstLetter(faker.lorem.words({ min: 1, max: 2 })));
    setTagLight(Helpers.capitalizeFirstLetter(faker.lorem.words({ min: 1, max: 2 })));
    setTitleTodo(Helpers.capitalizeFirstLetter(title));
  }

  useEffect(()=> {
    generateData();
  }, [])

  return (
    <>
      <div className={styles.todo}>
        <div className={styles.content}>
          <div className={styles.header}>
            <div className={styles.title}><input type="checkbox" checked={isCompleted} onChange={() => setIsCompleted(!isCompleted)}/>{titleTodo}</div>
          </div>
          <div className={styles.date}>
            <div className={styles.startDate}>{startDate}</div>
            <div className={styles.endDate}>{endDate}</div>
          </div>
          <div className={styles.description}>{description}</div>
          <div className={styles.control}>
            <div className={styles.tags}>
              <Tag text={tagBright} color='bright'/>
              <Tag text={tagLight} color='light' triangle='right'/>
            </div>
            <Avatar/>
          </div>
        </div>
      </div>
    </>
  );
}