import './App.css'

import { CORE_CONCEPTS } from './data.js'
import Intro from './components/Intro/Intro.jsx'
import Header from './components/Header/Header.jsx'
import CoreConcept from './components/CoreConcept.jsx'
import Examples from './components/Examples.jsx'
import Button from './components/Button.jsx'
// import ReactIcon from './components/ReactIcon.jsx'
import { useState } from 'react'
import Modal from './components/Modal/Modal.jsx'

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleOpenModal() {
    setModalIsOpen(true);
  }

  function handleCloseModal() {
    setModalIsOpen(false);
  }

  return (
    <>
      <Intro />
      <div className="card">
        <Button mode="filled"></Button>
        {/* <Button Icon={ReactIcon}></Button> */}
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

          <button onClick={handleOpenModal}>Click here to open a modal</button>
          <Modal open={modalIsOpen} onClose={handleCloseModal}>
            <p>Hey! Here we go</p>
            <button onClick={handleCloseModal}>Close</button>
          </Modal>
 
      </main>
    </>
  )
}

export default App

