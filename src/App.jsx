import { useState } from 'react'
import { Post } from './Post'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Post 
      author="Gabriel Morais"
      content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet placeat veniam ex a culpa impedit! Vitae, delectus, totam quia officia sunt assumenda at, ducimus repellat temporibus iusto libero odit cupiditate."
      
    />
   

   <Post 
      author="Luana Morais"
      content="Lorem ipsum POST."
      
    />

    </div>
  )
}


export default App
