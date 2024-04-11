import React, { useState } from 'react';
import styles from './style.module.scss';

export const View = () => {
  const [boards, setBoards] = useState([
    { id: 1, title: 'New board' },
    { id: 2, title: 'New board' },
    { id: 3, title: 'New board' },
  ]);

  const addHandler = () => {
    const obj = { id: Math.random(), title: 'New board' };
    if (boards.length < 6) {
      setBoards((prev) => [...prev, obj]);
    }
  };
  return (
    <div className={styles['add-board']}>
      <div className={styles['add-main']}>
        <div className={styles['input-overlay']}>
          <input type="text" placeholder="Board name" />
        </div>
        <div className={styles['button-overlay']}>
          <button type="button">Add</button>
        </div>
      </div>
      <div className={styles['create-button']}>
        <button onClick={addHandler} type="button">
          Create board
        </button>
      </div>
      <div className={styles['boards-main']}>
        {boards.map((el) => {
          return (
            <div key={el.id} className={styles['board-overlay']}>
              <div className={styles['board-item']}>
                <div className={styles['board-name']}>
                  <p>{el.title}</p>
                  <div className={styles['icons-overlay']}>
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
