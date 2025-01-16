import { useState } from 'react'
import Key from './components/Key'
import Keyboard from './components/Keyboard'
import Screen from './components/Screen'
import DarkModeToggle from './components/DarkModeToggle'

function App() {
  const [calculation, setCalculation] = useState("");
    let [darkMode, setDarkMode] = useState("");

  return (
    <div className="flex flex-col gap-8">
        <DarkModeToggle setDarkMode={setDarkMode}/>
        <header><h1 className={"text-3xl font-semibold text-center dark:text-white"}>React Calculator App</h1></header>
        <main className="flex flex-col gap-4">
            <Screen calculation={calculation} setCalculation={setCalculation} />
            <Keyboard calculation={calculation} setCalculation={setCalculation} />
        </main>
    </div>
  )
}

export default App
