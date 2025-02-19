// import reactImg from '../assets/react-core-concepst.png'
import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import './Intro.css'

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Intro() {
  const description = reactDescriptions[genRandomInt(2)];

  return (
    <section class="Intro">
      <div class="">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <p class="">Here is where my playground starts!</p>
      <p class="Intro-description">
        {description} React Concepts I will need for almost any app I am
        going to build
      </p>
      {/* <img src={reactImg} alt="Stylized atom" /> */}
    </section>
  );
}