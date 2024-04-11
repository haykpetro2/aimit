import React from 'react';
import { useRouter } from 'next/router';

export const Controller = (View) => {
  const Result = (props) => {
    const router = useRouter();
    const { pathname } = router;

    return <View {...props} pathname={pathname} />;
  };

  return Result;
};
