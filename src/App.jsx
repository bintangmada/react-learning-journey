import Greeting from "./components/Greeting"

function App() {

  function handleClick(name) {
    console.log(`Halo ${name}`);
  }

  const callback = () => {
    handleClick("Bintang")
  }

  return (
    <>
      <button onClick={callback}>Click Me</button>

      <button onClick={handleClick}>Click Me 2</button>
    </>

  )

}

export default App