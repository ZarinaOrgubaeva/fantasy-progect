import { useState, useEffect } from "react";
export const useTheme = (initial) => {
  const [theme, setTheme] = useState(initial || "black");

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme) {
      setTheme(localTheme);
    }
  }, []);
  const themeDark = ()=>{
    setTheme("black")
  }
  const themeLight = () => {
    setTheme("light");
  };
return {
  theme,
  themeDark,
  themeLight,
};
}