import React, {FC, useEffect, useState} from 'react'
import styles from '../../styles/AuthPage.module.scss';

type Props = {
  greetings: string[];
}

const Welcome: FC<Props> = ({greetings}) => {
  const [currentGreeting, setCurrentGreeting] = useState(0);
  const [style, setStyle] = useState(styles.greetingInitial);
  useEffect(() => {
    setTimeout(() => {
      if(currentGreeting === greetings.length - 1){
        setCurrentGreeting(0);
        setStyle(styles.greetingEnd)
      } else {
        setCurrentGreeting(currentGreeting + 1);
        setStyle(styles.greetingEnd)
      }
    }, 4000);
  })
  return (
    <h1 className={style}>{greetings[currentGreeting]}</h1>
  )
}

export default Welcome;
