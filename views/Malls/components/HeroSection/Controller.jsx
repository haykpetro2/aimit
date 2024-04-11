import React, { useEffect } from 'react';

export const Controller = (View) => {
  const Result = (props) => {
    useEffect(() => {
      const intervalId = setInterval(() => {
        const letters = document.getElementById('letters');
        const circle = document.getElementById('circle');
        const letter = letters.querySelectorAll('span');
        letter.forEach((item) => {
          if (item.style.animationPlayState === 'paused') {
            item.style.animationPlayState = 'running';
          } else {
            item.style.animationPlayState = 'paused';
          }
        });
        if (circle.style.animationPlayState === 'paused') {
          circle.style.animationPlayState = 'running';
        } else {
          circle.style.animationPlayState = 'paused';
        }
      }, 990);
      return () => clearInterval(intervalId);
    }, []);
    return <View {...props} />;
  };

  return Result;
};
