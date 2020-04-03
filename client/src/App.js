import React, {useState, useEffect} from 'react'

const App = () =>{
  const [name, setName] = useState("");
  const [studentid, setstudentid] = useState("");

  useEffect(()=>{
    fetch('/intro')
      .then(response=>response.json())
      .then(data => {
        setName(data.name)
        setstudentid(data.studentid)
      })
  })

  return (
    <div className="App">
      <h1>{name}</h1>
      <p>{studentid}</p>
    </div>
  )
}

export default App