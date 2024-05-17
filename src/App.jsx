import React from 'react'
import Navbar from './component/Navber'
import Herosection from './component/Herosection'
import Workflow from './component/Workflow'
import Price from './component/Price'
export default function App() {
  return (
    <div>
       <Navbar />
       <Herosection />
       <Workflow />
       <Price />
    </div>
  )
}
