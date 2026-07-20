const user = {
  firstName : "Bintang",
  lastName : "Mada",
  age : 21
}

function greeting(){
  return "Hallo react";
}


function App() {
  return (
    <>
      <h1>Hello {user.firstName} {user.lastName}</h1>
      <h1>Age: {user.age}</h1>
      <h1>Next year: {user.age+1}</h1>
      <p>{greeting()}</p>
    </>
  )
}

export default App
