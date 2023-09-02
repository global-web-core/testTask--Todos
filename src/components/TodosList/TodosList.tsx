import styles from './TodosList.module.css';
import {Todo} from '../../components';
import React, { useEffect, useState } from 'react';
import {Todos} from '../../models';
import {ITodo} from '../../typesAndInterfaces/interfaces';

export const TodosList = (): JSX.Element => {
  const [todos, setTodos] = useState<ITodo.Json[] | null>(null);
  const [countTodos, setCountTodos] = useState(0);

  const getTodos = async () => {
    const listTodos = await Todos.getTodos(1);
    if (listTodos) {
      setTodos(listTodos);
    } else {
      setTodos(null);
    }
  }

  useEffect(() => {
    async function startFetching() {
      getTodos();
    }
    startFetching()
  }, [])

  useEffect(() => {
    if (todos) {
      setCountTodos(todos?.length);
    } else {
      setCountTodos(0)
    }
  }, [todos])

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
        <div className={styles.cards}>
          {todos?.map(todo => <Todo key={todo.id} title={todo.title} completed={todo.completed}/>)}
          {!todos && (<span className={styles.listEmpty}>List empty</span>)}
        </div>
      </div>
    </>
  );
}