import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-red-500">
      Hello world! symplice

    </h1>
    <div className='text-blue-600'>
      Test
    </div>
    </>
  )
}

export default App
