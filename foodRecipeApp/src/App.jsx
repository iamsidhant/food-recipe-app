import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route} from 'react-router-dom';
import Home from './pages/home/Home';
import Favourites from './pages/favourites/Favourites';
import Details from './pages/details/Details';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='min-h-screen p-6 bg-white text-gray-600 text-lg'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/favourites' element={<Favourites/>} />
          <Route path='/items/:id' element={<Details/>} />
        </Routes>
      </div>
    </>
  )
}

export default App
