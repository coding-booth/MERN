import React, {useState} from 'react';
import Heading from './components/heading'
import paragraph from './components/paragraph'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <heading/>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, id tempore omnis eligendi esse veritatis ipsa nesciunt obcaecati maxime distinctio.</p>
      <button>click here</button>
    </>
  )
}

export default App
