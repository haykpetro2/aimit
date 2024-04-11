import { useEffect, useRef } from 'react';

export const useOutsideDetect = (setterFunction) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target) && setterFunction) {
        setterFunction(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside, true);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside, true);
    };
  }, [setterFunction]);

  return ref;
};
