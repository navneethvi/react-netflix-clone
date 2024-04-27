import React from 'react'
import NavBar from './components/NavBar'
import Banner from './components/Banner'
import RowPost from './components/RowPost'
import { action, originals, romance, horror } from './urls'

function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title="Netflix Originals"/>
      <RowPost url={action} title="Action" isSmall />
      <RowPost url={horror} title="Netflix Originals"/>
      <RowPost url={romance} title="Action" isSmall />
    </div>
  )
}

export default App
