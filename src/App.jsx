import Greeting from "./components/Greeting"

function App() {

  function handleClick() {
    console.log("Clicked");
  }

  return (
    <>
      <button onClick={handleClick}>Click Me</button>
    </>

  )

}

export default App