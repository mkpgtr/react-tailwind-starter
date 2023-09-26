import { useState } from 'react'
import './App.css'
import {BsCart3,BsLightningCharge,BsList} from 'react-icons/bs'

const navLinks = ['Home','About','Contact']
function App() {

  const [isNavOpen,setIsNavOpen] = useState(false)

  const toggleNav = ()=>{
    
    setIsNavOpen(!isNavOpen)
  }
  return (
    <>
    <nav className='max-w-[100vw] bg-yellow-500 p-8 flex hover:shadow-lg'>
      <div className="logo">
        Logo
      </div>
      <div className={`nav-links ms-auto w-full mt-10 flex flex-col items-center md:hidden ${isNavOpen ? null : 'hidden'}`}>
        <ul className='gap-8 md:hidden'>
     {navLinks.map((link)=>{
      return <li className='cursor-pointer p-4'>{link}</li> 
     })}
         <li>
          <div className='flex justify-center gap-8'> <BsCart3 />
        <BsLightningCharge /></div>
         </li>
        </ul>
      </div>
      <div className="nav-links ms-auto">
        <ul className='md:flex gap-8 items-center hidden'>
          <li className='cursor-pointer'>Home</li>
          <li className='cursor-pointer'>About</li>
          <li className='cursor-pointer'>Contact</li>
      
        </ul>
      </div>
      
      
      <div className="toggle-button md:hidden cursor-pointer transition-transform" onClick={toggleNav}>
        <BsList />
      </div>
      <div className="nav-end-buttons ms-auto  gap-5 text-lg hidden md:flex md:items-center justify-center">
        <BsCart3 />
        <BsLightningCharge />
      </div>
    </nav>
    
    </>
  )
}

export default App
