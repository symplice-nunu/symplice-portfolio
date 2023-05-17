import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import SideBar from './Components/SideBar';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
    <div className='flex flex-row'>
      <div className='my-3 mx-3 px-4 border-zinc-200 border text-white py-6 rounded-t-3xl rounded-b-3xl'> 

     <SideBar />
      </div>
      <div className="flex my-1 px-4 pl-52 mr-3 py-6 w-full  rounded-t-3xl rounded-b-3xl md:h-[950px]">
     <Home />
     <Routes>
      <Route exact path="/"></Route>
     </Routes>
    </div>
    </div>
    </BrowserRouter>
    </>
  )
}

export default App
