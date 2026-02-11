import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Test from './components/test'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/homePage'
import LoginPage from './pages/loginPage'
import RegisterPage from './pages/registerPage'
import AdminPage from './pages/adminPage'
import { Toaster } from 'react-hot-toast'

// line 28 = (/admin/*) = admin page ekata passe monava thibbath admin page ekamai enne

function App() {

//<Toaster position='top-right'/> -->> notification 
  return (

    <BrowserRouter>
  
    <Toaster position='top-right'/>


     <div className="w-full h-screen bg-primary text-secondary">

               <Routes path="/">

                      <Route path="/*" element={<HomePage/>}/>
                       <Route path="/login" element={<LoginPage/>}/>
                        <Route path="/register" element={<RegisterPage/>}/>
                        <Route path="/admin/*" element={<AdminPage/>}/>
                        <Route path="/test" element={<Test></Test>}/>
                      
                     

               </Routes>


          </div>
       
    
    </BrowserRouter>
    
         
        
   

  
  )
}

export default App
