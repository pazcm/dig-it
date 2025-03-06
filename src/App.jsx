import { useState } from 'react'
import './App.css'
import { CORE_CONCEPTS } from './data.js'
import Intro from './components/Intro/Intro.jsx'
import CoreConcept from './components/CoreConcept.jsx'
import TabButton from './components/TabButton.jsx'
import { EXAMPLES } from './data.js'

function App() {
  const [ selectedTopic, setSelectedTopic ] = useState(); //if we have a selected topic**

  const [count, setCount] = useState(0)

  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props' 'state'
    setSelectedTopic(selectedButton)
    console.log(selectedTopic)
  }

  console.log('Marta & React Components')

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
                <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
                <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
                <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
                <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
              </menu>

              {!selectedTopic ? <p>Please select a topic</p> : null} 
              {selectedTopic ? (
                <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                  <code>
                    {EXAMPLES[selectedTopic].code}
                  </code>
                </pre>
              </div>
              ) : null}

              {/* or use this shorter apporach -> if we have a selected topic:
              {!selectedTopic ? <p>Please select a topic</p> : <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                  <code>
                    {EXAMPLES[selectedTopic].code}
                  </code>
                </pre>
              </div>} */}
          </section>
      </main>
    </>
  )
}

export default App
