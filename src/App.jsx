import './App.css'
import styles from './App.module.css'
import Display from './components/Display'
import Buttons from './components/Buttons'
import { useState } from 'react'

function App() {

 
  let [calValue, setCalValue] = useState("")


  const buttonHit = (innerText) => {
    if(innerText === "C"){
      setCalValue("")
    }
    else if(innerText === "="){
      const output = eval(calValue)
      setCalValue(output)
    }
    else if(innerText === "DEL"){
      setCalValue(calValue.slice(0,-1))
    }
    else{
      const updatedCalValue = calValue + innerText;
      setCalValue(updatedCalValue)
    }
  }

  return (
    <center>
    <div className={styles['main-container']}>
        <Display displayValue = {calValue}/>
        <Buttons buttonHit = {buttonHit}/>
    </div>
    </center>
  )
}

export default App
