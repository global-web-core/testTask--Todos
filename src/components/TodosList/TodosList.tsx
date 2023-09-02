import styles from './TodosList.module.css';
import {Todo} from '../../components';
import React, { useEffect, useRef, useState } from 'react';
import {Todos} from '../../models';
import {ITodo} from '../../typesAndInterfaces/interfaces';

export const TodosList = (): JSX.Element => {
  const [todos, setTodos] = useState<ITodo.Json[] | null>(null);
  const [countTodos, setCountTodos] = useState(0);
  const [page, setPage] = useState(1);
  const cardsRef = useRef<HTMLDivElement>(null);

  const getTodos = async () => {
    const listTodos = await Todos.getTodos(page);
    if (listTodos) {
      const newList = listTodos.filter(todo => !todos?.includes(todo));
      setTodos(prevTodos => {
        if (prevTodos && newList) {
          if (todos) return [...prevTodos, ...newList]
          if (!todos) return [...newList]
        } else {
          return [...newList]
        }
        return null
      })
    } else {
      setTodos(null);
    }
  }

  useEffect(() => {
    if (todos) {
      setCountTodos(todos?.length);
    } else {
      setCountTodos(0)
    }
  }, [todos])

  useEffect(() => {
    getTodos();
    const cardsElement = cardsRef.current;
    if (cardsElement) cardsElement.addEventListener('scroll', handleScroll);

    return () => {
      if (cardsElement) cardsElement.removeEventListener('scroll', handleScroll);
    };
  }, [page])

  const handleScroll = () => {
    const cardsElement = cardsRef.current;
    if (cardsElement) {
      if (cardsElement.scrollTop + cardsElement.clientHeight >= cardsElement.scrollHeight - 1) {
        const newPage = page + 1;
        setPage(newPage);
      }
    }
  };

  return (
    <>
      <div className={styles.todos}>
        <div className={styles.header}>
          <span className={styles.date}>Today</span>
          <div className={styles.control}>
            <button className={styles.add}>+</button>
            <span className={styles.count}>{countTodos}</span>
          </div>
        </div>
        <div className={styles.cards} ref={cardsRef}>
          {todos?.map(todo => <Todo key={todo.id} title={todo.title} completed={todo.completed}/>)}
          {!todos && (<span className={styles.listEmpty}>List empty</span>)}
        </div>
      </div>
    </>
  );
}