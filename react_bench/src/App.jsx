import { useState } from 'react'

import './App.css'
import NumbersTable from "./NumbersTable.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
          <NumbersTable/>
      </>
  )
}

export default App
