import { RiMoonFill } from "react-icons/ri";
import { BsFillSunFill } from "react-icons/bs";
import React, { useContext, useEffect, useState } from "react";
import styles from "./SwitchStyles.module.scss";
import { useRef } from "react";

import { ThemeContext } from "../ThemeContext/themeContext"; //truyền dữ liệu sang

//useRef lấy các DOM element

// đổi màu UI
function SwitchMode() {
  const themeContext = useContext(ThemeContext); //nhận giá trị ThemeContext bước 3

  const refInput = useRef(); //lấy các DOM element trong input
  const refCircle = useRef();
  const refToggle = useRef();

  const [isDark, setIsDark] = useState(false);

  //Dùng useEffect khi click vào đổi màu -> giá trị isDark chưa check
  useEffect(() => {
    refInput.current.checked = isDark; //1
  }, [isDark]);

  //khi click vao toggle đổi màu 2 icon.
  const handleToggle = () => {
    refInput.current.checked = !refInput.current.checked;
    setIsDark(refInput.current.checked); //2 khi có giá trị set nền tối sang nên sáng
    themeContext.toggleTheme(); //cập nhật theme toàn UI
  };

  //Đổi nền tối sang sáng của toggleButoon
  useEffect(() => {
    const changeBackgroundButton = () => {
      //khi nó màu tối thì set cho nó cũng màu tối
      if (isDark) {
        refCircle.current.style.background = "#222";
        refToggle.current.style.background = "#fff";
      } else {
        refCircle.current.style.background = "#fff";
        refToggle.current.style.background = "hsl(208, 59%, 41%)";
      }
    };
    changeBackgroundButton(); //xong gọi hàm đó ra

    //dọn dẹp trước khi thay đổi: lắng nghe event
    document.addEventListener("resize", changeBackgroundButton);
    return () => {
      document.removeEventListener("resize", changeBackgroundButton);
    };
    //xong dọn dẹp
  }, [isDark]);

  return (
    <div className={styles.toggleButton} ref={refToggle} onClick={handleToggle}>
      <input type="checkbox" className={styles.Input} ref={refInput} />
      <div className={styles.Icon}>
        {isDark ? <RiMoonFill /> : <BsFillSunFill />}
        {/* nếu nền tối ? icon mặt trăng : mặt trời */}
      </div>

      <div className={styles.Circle} ref={refCircle}></div>
    </div>
  );
}

export default SwitchMode;
