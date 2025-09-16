import { useState } from 'react'

import './App.css'
import AppNavBar from './AppNavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AppNavBar />
    </>
  )
}

export default App
