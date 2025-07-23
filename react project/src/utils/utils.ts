const getImagePrefix = () => {
  return import.meta.env.PROD ? "/React-Tailwind-CSS-Portfolio-Template/" : "";
};

export { getImagePrefix }; 