import { useEffect, useState } from "react"
import Greeting from "./components/Greeting"

function App() {

  const [count, setCount] = useState(0);

  function handleClick(){
    return "Click"
  }

  console.log(handleClick)


  return (
    <>

      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>

    </>
  )


}


export default App