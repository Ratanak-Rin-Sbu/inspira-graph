"use client"

import Image from "next/image"
import styles from "./themeToggle.module.css"
import { useContext, useState } from "react"
import { ThemeContext } from "@/context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggle } = useContext(ThemeContext);
  const [animate, setAnimate] = useState(false);

  console.log(theme);

  return (
    <div 
      className="styles.container"
      onClick={() => {
        toggle(); 
        setAnimate(true);
        setTimeout(() => setAnimate(false), 400);
      }}
    >
      {theme === "dark" ? 
        (<Image
          src="/sun.png"
          alt="" width={18} 
          className={animate ? styles.jumpAnimation : ""}
          height={18} 
          style={{transition: "all 0.8s", cursor: "pointer"}}/>) :
        (<Image 
          src="/moon.png" 
          alt="" width={18} 
          className={animate ? styles.jumpAnimation : ""}
          height={18}  
          style={{transition: "all 0.8s", cursor: "pointer"}}/>)
      }
    </div>
  )
}

export default ThemeToggle