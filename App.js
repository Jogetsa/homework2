import React, { useState } from "react"
import "./App.css"

function App() {

  const [persons, setPersons] = useState([
    {
      name: "Akram",
      number: 13131
    }
  ])
  const [name, setName] = useState("")
  const [number, setNumber] = useState()

  const handlePerson = (e) => {
    const newPerson = {
      name : name,
      number : number
    }
    setPersons(persons.concat(newPerson))
    e.preventDefault()
  }

  const handleChangeN = (e) => {
    setName(e.target.value)
  }
  const handleChangeP = (e) => {
    setNumber(e.target.value)
  }

  return (
    <>
      <h1>Контактная Книга</h1>
      <form onSubmit={handlePerson}>
        <div>
          <h2>Имя: <input type="text" value={name} onChange={handleChangeN}/></h2>
          <h2>Номер телефона: <input type="number" value={number} onChange={handleChangeP}/></h2>
        </div>
        <div>
          <button type="submit">Добавить</button>
        </div>
      </form>
      <h3>Контакты: </h3>
      <h3>{persons.map(person => person.name)}: {persons.map(person => person.number)}</h3>
    </>
  );
}

export default App;
