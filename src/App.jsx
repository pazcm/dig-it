import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Intro() {
  const description = reactDescriptions[genRandomInt(2)];

  return (
    <section>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <p>Here is where my playground starts!</p>
      <p>
        {description} React Concepts I will need for almost any app I am
        going to build
      </p>
    </section>
  );
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Intro />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          click {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
