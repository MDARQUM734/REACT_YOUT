import React from 'react'
import Card from'./components/card'

const App = () => {
  return (
    <div>
      <div className='card'>
        <h1>MD ARQUM</h1>
        <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore officiis obcaecati repellendus voluptatum itaque nobis minima! Libero delectus et praesentium officiis odit hic. Accusantium consectetur accusamus vero deserunt maxime velit!</h2>
      </div>

      <div>
        {Card()}
      </div>



    </div>
  )
}

export default App