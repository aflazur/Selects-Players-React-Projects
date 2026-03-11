
import { Suspense } from 'react'
import './App.css'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import Navbar from './components/Navbar/Navbar'

const fetchPlayers = async () => {
  const res = await fetch('/players.json')
  return res.json();
}

function App() {

  const playersPromise = fetchPlayers();
  return (
    <>
     <Navbar></Navbar>
     <Suspense fallback = {<span className="loading loading-spinner loading-xl"></span>}>
      <AvailablePlayers playersPromise= {playersPromise}></AvailablePlayers>
     </Suspense>
    </>
  )
}

export default App
