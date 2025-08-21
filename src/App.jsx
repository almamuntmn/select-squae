import { useEffect, useState } from 'react'
import './App.css'
import Body from './Component/Body/Body'
import Header from './Component/Header/Header'
import Hero from './Component/Hero/Hero'

function App() {
  const [coin, setCoin] = useState(0);
  const [players, setPlayers] = useState([]);

  const handleCoinChange = (amount) => {
    setCoin(coin + amount);
  };

  useEffect(()=>{
    fetch('/Players.json')
      .then(response => response.json())
      .then(data => setPlayers(data))
      .catch(error => console.error('Error fetching player data:', error));
  },[])

  return (
    <>
      <Header coin={coin} />
      <Hero onCoinChange={handleCoinChange} />
      <Body players={players} />
    </>
  )
}

export default App
