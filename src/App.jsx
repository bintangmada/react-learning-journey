import Greeting from "./components/Greeting"

function App() {

  function sayHello(event, name){
    console.log(event.target)
    console.log(name)
  }

  return (
    <>
      <button onClick={(event) => sayHello(event, "Bintang")}>Click Me</button>

    
    </>

  )

}

export default App