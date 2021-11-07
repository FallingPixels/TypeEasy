import React, {FC, useEffect, useState} from 'react'
import styles from '../../styles/AuthPage.module.scss';

type Props = {
  greetings: string[];
}
const Welcome: FC<Props> = ({greetings}) => {
  const [currentGreeting, setCurrentGreeting] = useState<number>(0)
  const [time, setTime] = useState<number>(3500)
  const [style, setStyle] = useState<string>(styles.greetingEnd);
  useEffect(() => {
  const opacity = setTimeout(() => {
    if(time === 3500){
      setStyle(styles.greetingInitial)
      setTime(1200);
    }
    else {
      setStyle(styles.greetingEnd);
      if (currentGreeting === greetings.length - 1) {
        setCurrentGreeting(0)
      }
      else {
        setCurrentGreeting(currentGreeting + 1)
      }
      setTime(3500);
    }
  }, time)
  return () => {
    clearTimeout(opacity);
  }
  })


  return (
    <h1 className={style}>{greetings[currentGreeting]}</h1>
  )
}

export default Welcome;
