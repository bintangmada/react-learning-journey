import { useState } from "react"
import Greeting from "./components/Greeting"

function App() {

  const [count, setCount] = useState(0);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>

      <Header></Header>

    </>
  )


}


function Header() {

  return (
    <>
      <h2>Ini adalah header</h2>
    </>
  )

}

export default App