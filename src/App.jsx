import React, { useState } from 'react'
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div>
        <Navbar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
        <Dashboard isSidebarOpen={isSidebarOpen} />
    </div>
  )
}
export default App