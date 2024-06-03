"use client";
import { useState,useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun } from 'lucide-react';
import { Moon } from 'lucide-react';
const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }
  return (
    <div>
      {theme === "dark" ? (
        <button onClick={() => setTheme("light")}>
          <Sun color="#F0B773" size={18}/>
        </button>
      ) : (
        <button onClick={() => setTheme("dark")}>
            <Moon size={18} />
        </button>
      )}
    </div>
  );
};
export default ThemeChanger;