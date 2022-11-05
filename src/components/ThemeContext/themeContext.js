import React, { createContext, useState } from "react";

const ThemeContext = createContext(); //bước 1

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("lightTheme");

  //hàm toggleTheme
  const toggleTheme = () => {
    setTheme(theme === "darkTheme" ? "lightTheme" : "darkTheme"); //nếu nó là darkTheme thì chuyển sang lightTheme ngược lại thì là darkTheme
  };

  const valueTheme = { theme, toggleTheme }; //toggleTheme : chuyển đổi nền tối sang nền sáng

  return (
    <ThemeContext.Provider value={valueTheme}>{children}</ThemeContext.Provider> //bước 2
  );
}

export { ThemeContext, ThemeProvider };

//children : ôm các conponent khác

//Context : 3 bước
// 1.Create context
// 2.Provider
// 3.Nhận dữ liệu
