import { useState } from 'react'
import './App.css'
import { CORE_CONCEPTS } from './data.js'
import Intro from './components/Intro/Intro.jsx'
import CoreConcept from './components/CoreConcept.jsx'
import TabButton from './components/TabButton.jsx'



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
           {/* here I will use the shorter syntax: */}
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
          </section>
          <section id="examples">
            <h2>Examples</h2>
              <menu>
                <TabButton>Components</TabButton>
                <TabButton>JSX</TabButton>
                <TabButton>Props</TabButton>
                <TabButton>State</TabButton>
              </menu>
          </section>
         
      </main>
    </>
  )
}

export default App
