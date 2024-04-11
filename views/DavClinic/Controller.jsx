import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { isClient } from '../../config/helpers';

export const Controller = (View) => {
  const Result = (props) => {
    const [render, setRender] = useState(false);
    const router = useRouter();
    const { pathname } = router;
    useEffect(() => {
      if (isClient()) {
        const heroSection = document.getElementById('section-main').offsetHeight;
        const aboutSection = document.getElementById('section-about').offsetHeight;
        const usersSection = document.getElementById('section-users').offsetHeight;
        let top = 0;
        const count = heroSection + aboutSection + usersSection;
        window.addEventListener(
          'scroll',
          () => {
            top = Math.round(window.scrollY);
            if (top + 300 >= count) {
              setRender(true);
            }
          },
          false
        );
      }
    }, []);

    return <View {...props} pathname={pathname} render={render} />;
  };
  return Result;
};
