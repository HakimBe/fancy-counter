import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Counter } from './Counter'

function App() {
  return (
    <div>
      <Counter>
        <p>Here we go again from the parent</p>
      </Counter>
    </div>
  )
}

export default App
