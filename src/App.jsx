import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import reactImg from './assets/react-core-concepst.png'
import { CORE_CONCEPTS } from './data.js'

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

function CoreConcept(props) {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Intro />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Click {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <p className="read-the-docs">
          Click on the Vite and React logos to go to the Docs
        </p>
      </div>
      
      <main>
          <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept 
            title={CORE_CONCEPTS[0].title}
            description={CORE_CONCEPTS[0].description}
            image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept 
            title={CORE_CONCEPTS[1].title}
            description={CORE_CONCEPTS[1].description}
            image={CORE_CONCEPTS[1].image}
            />
            <CoreConcept 
            title={CORE_CONCEPTS[2].title}
            description={CORE_CONCEPTS[2].description}
            image={CORE_CONCEPTS[2].image}
            />
            <CoreConcept 
            title={CORE_CONCEPTS[3].title}
            description={CORE_CONCEPTS[3].description}
            image={CORE_CONCEPTS[3].image}
            />
          </ul>
          </section>
      </main>
    </>
  )
}

export default App
