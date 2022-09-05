import React, { useContext } from 'react'
import { RiMoonFill } from 'react-icons/ri'
import {BsFillSunFill} from 'react-icons/bs'
import { useEffect, useRef, useState } from 'react'
// import { useContext } from 'react'
import styles from './SwitchStyles.module.scss'
import { ThemeContext } from '../ThemeContext/themeContext'

function SwitchMode()  {

  const themeContext = useContext(ThemeContext)

  //useRef
  const refInput = useRef();
  const refCircle = useRef();
  const refToggle = useRef();

  //useState
  const [isDark, setIsDark] = useState(false);

  //useEffect
  useEffect(() => {
    refInput.current.checked = isDark; //set gia tri ban dau bang false
  }, [isDark])
  

  //handleToggle
  const handleToggle = () => {
    refInput.current.checked = ! refInput.current.checked; //click vào thì phủ định ngược lại
    setIsDark(refInput.current.checked)   //set gia tri bang true
    themeContext.toggleTheme();
  }

  //useEffect
  useEffect(() => {
    const changeBackgroundButton = () => {

      if (isDark) {
        refCircle.current.style.background = '#222'
        refToggle.current.style.background = '#fff'
      }
      
      else {
        refCircle.current.style.background = '#fff'
        refToggle.current.style.background = 'var(--ToggleButtonBackground:  hsl(208, 59%, 41%);)'
      }
    }

    changeBackgroundButton();

    document.addEventListener('resize', changeBackgroundButton)
    
    return () => {
      document.removeEventListener('resize', changeBackgroundButton)
    }
  }, [isDark])


  //return
  return (
    <div className={styles.toggleButton} ref={refToggle} onClick={handleToggle}>

      <input type="checkbox" className={styles.Input} ref={refInput}/>

      <div className={styles.Icon}>
        {
          (isDark) ? <RiMoonFill /> : <BsFillSunFill />
        }
      </div>

      <div className={styles.Circle} ref={refCircle}></div>

    </div>
  )
}

export default SwitchMode;