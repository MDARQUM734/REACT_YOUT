import React from 'react'
import Card from './components/card'

const App = (props) => {
  return (
    <div className='parent'>
        {/* <div className='card'>
        <h1>MD ARQUM</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, veniam.</p>
        <button>View Profile</button>
      </div> */}
      {/* <Card />
      <Card />
      <Card /> */}
      <Card user='Aman' age = {18} />
      <Card user='Sarthak' age = {21} />
    </div>
  )
}

export default App

