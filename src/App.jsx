import './App.css'
import { useState } from 'react'
import { CORE_CONCEPTS } from './data.js'
import Intro from './components/Intro/Intro.jsx'
import Header from './components/Header/Header.jsx'
import CoreConcept from './components/CoreConcept.jsx'
import Examples from './components/Examples.jsx'

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
      <Header />
      <main>
          <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => <CoreConcept key={conceptItem.title} {...conceptItem} />)}
          </ul>
          </section>
          <Examples />
      </main>
    </>
  )
}

export default App
