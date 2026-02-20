import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-(--primary-color) font-bold text-white p-10 mt-30'>
      <p className='text-center text-5xl '>
        Home
      </p>
    </div>
  )
}

export default App
