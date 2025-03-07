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

  // rendering content conditionally
  let tabContent = <p>Please select a topic</p>

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
               <code>
                  {EXAMPLES[selectedTopic].code}
                </code>
              </pre>
        </div>
      )
    }

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
          {/* transforming the array of objects _in data.js_ into an array of JSX elements using map method */}
            {/* this function will be executed by react for every item in that array */}
            {CORE_CONCEPTS.map((conceptItem) => <CoreConcept key={conceptItem.title} {...conceptItem} />)}
            {/* When dynamically outputting a list of elements, every element should receive a unique "key" 
            to help React tell the list items apart */}

            {/* These items are now dynamically generated ^^ thanks to map method that output the list
            __so I could now modify the objects file _data.js_ and get the output expected automatically__
            <CoreConcept 
            title={CORE_CONCEPTS[0].title}
            description={CORE_CONCEPTS[0].description}
            image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} /> */}
          </ul>
          </section>
          <section id="examples">
            <h2>Examples</h2>
              <menu>
                <TabButton isSelected={selectedTopic === 'components'} 
                  onSelect={() => handleSelect('components')}
                >
                  Components
                </TabButton>
                <TabButton isSelected={selectedTopic === 'jsx'}
                  onSelect={() => handleSelect('jsx')}
                >
                  JSX
                </TabButton>
                <TabButton isSelected={selectedTopic === 'props'} 
                onSelect={() => handleSelect('props')}
                >
                  Props
                </TabButton>
                <TabButton isSelected={selectedTopic === 'state'} 
                onSelect={() => handleSelect('state')}
                >
                  State
                </TabButton>
              </menu>

              {/* other apprach using '&&' in two segments, instead ternary expression */}
              {/* {!selectedTopic && <p>Please select a topic</p>}
              {selectedTopic && (
                <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                  <code>
                    {EXAMPLES[selectedTopic].code}
                  </code>
                </pre>
              </div>
              )} */}

{/* or use a variable with a conditional check - see ^ if statement  */}
              {tabContent}

          </section>
      </main>
    </>
  )
}

export default App
