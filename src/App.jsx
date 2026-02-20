import { useState } from 'react'
import Hero from './components/sections/Home/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
      <Hero />
    </div>
  )
}

export default App
