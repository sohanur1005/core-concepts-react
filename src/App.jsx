import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'

function App() {
  const actors=["Jasim","Rubel","Salman"]

  return (
    <>

      <h1>Vite + React</h1>
      <Actor name={'Sohanur'}></Actor>
      {
        actors.map(actor => <Actor name={actor}></Actor>)
      }
      
     

      {/* <Todo task="Learn React"
      isDone={true}></Todo>
      <Todo task="Explore core concepts" 
      isDone={false}></Todo>
      <Todo task="Try jsx"
      isDone={true}></Todo> */}
      {/* <Device name="Laptop" price="50000"></Device>
      <Device name="Mobile" price="20000"></Device>
      <Device name="Watch" price="5000"></Device>
      <Person></Person>
      <Student grade="7" score="99"></Student>
      <Student></Student>
      <Developer></Developer> */}
      
    </>
  )
}

function Device(props) {
  console.log(props)
  return <h2>This device: {props.name} Price: {props.price} </h2>
}


function Person(props) {
  console.log(props)
  const age = 25;
  const person = { name: 'Sohanur', age: '12' }
  return (
    <h3>I am {person.name} with age: {age}</h3>
  )
}

// Destructuring
const { grade, score } = { grade: "7", score: "99" }
function Student({ grade, score }) {
  console.log(grade, score)
  return (

    <div className='student'>
      <h3>I am a student</h3>
      <p>Score: {score}</p>
      <p>Grade: {grade}</p>
    </div>
  )
}

function Developer() {
  const developerStyle = {
    border: '2px solid purple',
    margin: '20px',
    padding: '20px',
    borderRadius: '20px'
  }
  return (
    <div style={developerStyle}>
      <h5>Devo Devo</h5>
      <p>Coding</p>
    </div>

  )
}

export default App
