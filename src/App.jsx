import { useState } from 'react'
import Post from './Post'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Post />
    <Post />
    <Post />

    </div>
  )
}

export default App
