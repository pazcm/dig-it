import { useState } from 'react'
import './Examples.css'
import { EXAMPLES } from '../data.js'
import TabButton from './TabButton.jsx'
import Section from './Section.jsx'
import Tabs from './Tabs.jsx'


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
    <Section title="Examples" id="examples">
      <Tabs buttons={
      <>
        <TabButton isSelected={selectedTopic === 'components'}
        onClick={() => handleSelect('components')}
        >
          Components
        </TabButton>
        <TabButton isSelected={selectedTopic === 'jsx'}
          onClick={() => handleSelect('jsx')}
        >
          JSX
        </TabButton>
        <TabButton isSelected={selectedTopic === 'props'}
        onClick={() => handleSelect('props')}
        >
          Props
        </TabButton>
        <TabButton isSelected={selectedTopic === 'state'}
        onClick={() => handleSelect('state')}
        >
          State
        </TabButton>
      </>
      }>  
      </Tabs>

      {tabContent}

  </Section>
  )
}

