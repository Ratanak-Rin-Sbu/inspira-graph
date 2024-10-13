"use client"

import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from "../context/ThemeContext";

function ThemeProvider({ children }) {
  const { theme } = useContext(ThemeContext);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <div className={theme}>{children}</div>
  )
}

export default ThemeProvider