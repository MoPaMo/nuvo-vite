import { useState } from 'react'
import Discover from './pages/discover'
import LeftSidebar from './components/MainSide'
function App() {


  return (
    <>
        
        <div className="flex flex-row bg-slate-800">
        <LeftSidebar />
        <Discover />
          </div>
          
    </>
  )
}

export default App
