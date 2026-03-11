
import { Suspense, useState } from 'react'
import './App.css'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import Navbar from './components/Navbar/Navbar'
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers'

const fetchPlayers = async () => {
  const res = await fetch('/players.json')
  return res.json();
}
const playersPromise = fetchPlayers();
function App() {

  

  const [toggle, setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(600000000)

  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>
      <div className='max-w-11/12 mx-auto flex justify-between items-center mt-12 mb-8'>
        <h1 className='font-bold text-2xl'>Available Players</h1>
        <div className='font-bold'>
          <button onClick={() => setToggle(true)} className={`py-3 px-4 border-1 border-gray-400 rounded-l-2xl border-r-0 ${toggle === true ? "bg-[#E7FE19]" : ""}`}>Available</button>
          <button onClick={() => setToggle(false)} className={`py-3 px-4 border-1 border-gray-400 rounded-r-2xl border-l-0 ${toggle === false ? "bg-[#E7FE19]" : ""}`}>Selected <span>(0)</span></button>
        </div>

      </div>
      {
        toggle === true ? <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
          <AvailablePlayers availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} playersPromise={playersPromise}></AvailablePlayers>
        </Suspense>
          : <SelectedPlayers></SelectedPlayers>
      }



    </>
  )
}

export default App
