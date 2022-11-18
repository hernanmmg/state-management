import { useState } from 'react'
import { UseReducer } from './UseReducer'
import UseMemo from './UseMemo'
import UseEffect from './UseEffect'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <UseReducer />
      <UseMemo />
      {/* <UseEffect /> */}
    </div>
  )
}

export default App
