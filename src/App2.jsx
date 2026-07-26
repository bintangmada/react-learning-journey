import { useEffect, useState } from "react"
import Greeting from "./components/Greeting"

function App2() {

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Fetch user")

    return () => {
      console.log("cleanup")
    }

  },[count])
 
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

export default App2