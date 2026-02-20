import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-(--primary-color) font-bold text-white p-10 mt-30'>
      <p>
        Hello, World!
      </p>
    </div>
  )
}

export default App
