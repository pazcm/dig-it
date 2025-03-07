import reactImg from '../../assets/react-core-concepts.png'
import './Header.css'

const randomAdjetives = ['Fundamental', 'Crucial', 'Core']

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1))
}

export default function Header() {
  const adjectives = randomAdjetives[genRandomInt(2)]

  return (
    <section class="Header">
      <div class="atom-react">
        <img src={reactImg} alt="Stylized atom" />
      </div>
      <p class="Header-adjectives">
        {adjectives} React Concepts I will need for almost any app I am
        going to build
      </p>
    </section>
  );
}