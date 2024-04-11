export const isClient = () => {
  return (
    typeof window !== 'undefined' &&
    !!window &&
    !!window.document &&
    !!window.document.createElement
  );
};

export const handleServiceScroll = (id) => {
  const element = document.getElementById(`${id}`);
  if (element?.offsetTop) {
    setTimeout(() => {
      window.scrollTo({
        behavior: 'smooth',
        top: element.offsetTop - 100,
      });
    }, 100);
  }
};
