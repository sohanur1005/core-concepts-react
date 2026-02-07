import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  return (
    <>
      
      <h1>Vite + React</h1>
      <Person></Person>
      <Person></Person>
      <Person></Person>
     
      <Student></Student>
    </>
  )
}

function Person(){
  const age=25;
  const person={name:'Sohanur',age:12}
  return(
   <h3>I am {person.name} with age: {age}</h3>
  )
}

function Student(){
  return (
    <div className='student'>
      <h3>I am a student</h3>
      <p>Name:Sohanur Rahman</p>
      <p>Age:25</p>
    </div>
  )
}

export default App
