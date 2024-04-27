import React, { useState, useEffect } from 'react';

const useSystemTheme = () => {
  const [systemTheme, setSystemTheme] = useState('light');

  useEffect(() => {
    if (window.matchMedia) {
      const systemThemeQueryList = window.matchMedia('(prefers-color-scheme: dark)');
      const changeHandler = (event) => {
        const newSystemTheme = event.matches ? 'dark' : 'light';
        setSystemTheme(newSystemTheme);
      };

      systemThemeQueryList.addEventListener('change', changeHandler);
      changeHandler(systemThemeQueryList);

      return () => {
        systemThemeQueryList.removeEventListener('change', changeHandler);
      };
    }
  }, []); // Dependency array boş bırakıldı

  return systemTheme;
};

export default useSystemTheme;