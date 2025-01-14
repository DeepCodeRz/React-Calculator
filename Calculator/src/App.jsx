import { useState } from 'react'
import Key from './components/Key'
import Keyboard from './components/Keyboard'
import Screen from './components/Screen'
import DarkModeToggle from './components/DarkModeToggle'

function App() {
  const [calculation, setCalculation] = useState("");
    let [darkMode, setDarkMode] = useState("");

  return (
    <div className="flex flex-col gap-4">
        <DarkModeToggle setDarkMode={setDarkMode} />
        <Screen calculation={calculation} setCalculation={setCalculation} />
        <Keyboard calculation={calculation} setCalculation={setCalculation} />
    </div>
  )
}

export default App
