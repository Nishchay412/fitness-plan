import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/header'
import { Hero } from './components/hero'
import background from '../src/components/background.jpg';
function App() {
 
  return (

    <div className=" relative bg-custom-background bg-fixed bg-cover bg-center h-70vh w-full  sm:bg-[180%] md:bg-[130%] md:bg-[top_30%] bg-zoom-out bg-[150%]">
  <Header/>
  <Hero/>
  </div>
  )
}

export default App
