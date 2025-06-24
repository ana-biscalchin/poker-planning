import { useState } from 'react'
import { useStore } from '../store/useStore'
import Header from '../components/Header'

export default function Home() {
  const [name, setName] = useState('')
  const players = useStore((s) => s.players)
  const addPlayer = useStore((s) => s.addPlayer)

  const handleAdd = () => {
    if (name) {
      addPlayer(name)
      setName('')
    }
  }

  return (
    <>
      <Header />
      <main style={{ padding: '1rem' }}>
        <h1>Poker Planning</h1>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Add player" />
        <button onClick={handleAdd}>Add</button>
        <ul>
          {players.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      </main>
    </>
  )
}
