import { useState } from 'react'
import './Examples.css'
import { EXAMPLES } from '../data.js'
import TabButton from './TabButton.jsx'

export default function Examples() {
  const [ selectedTopic, setSelectedTopic ] = useState()

    // selectedButton => 'components', 'jsx', 'props' 'state'
    function handleSelect(selectedButton) {
      setSelectedTopic(selectedButton)
      // console.log(selectedTopic)
    }

    let tabContent = <p class="tabContent-text">Please click in a topic ^</p>
    
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
      {tabContent}

  </section>
  )
}

