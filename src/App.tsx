import { Counter } from './Counter'

function App() {
  return (
    <div className='flex justify-center'>
      <Counter>
        <p className='text-xl font-bold underline'>Hfere we go again from the parent</p>
      </Counter>
    </div>
  )
}

export default App
