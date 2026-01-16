import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Test from './components/test'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/homePage'
import LoginPage from './pages/loginPage'
import RegisterPage from './pages/registerPage'



function App() {


  return (

    <BrowserRouter>
    
     <div className="w-full h-screen bg-primary text-secondary">

               <Routes path="/">

                      <Route path="/" element={<HomePage/>}/>
                       <Route path="/login" element={<LoginPage/>}/>
                        <Route path="/register" element={<RegisterPage/>}/>
                      
                     

               </Routes>


          </div>
       
    
    </BrowserRouter>
    
         
        
   

  
  )
}

export default App
