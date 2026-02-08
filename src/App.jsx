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
      <Developer></Developer>
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

function Developer(){
  const developerStyle={
    border:'2px solid purple',
    margin:'20px',
    padding:'20px',
    borderRadius:'20px'
  }
  return(
    <div style={developerStyle}>
      <h5>Devo Devo</h5>
      <p>Coding</p>
    </div>

  )
}

export default App
