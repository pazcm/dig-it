import componentsImg from './assets/components.png';
import propsImg from './assets/config.png';
import jsxImg from './assets/jsx-ui.png';
import stateImg from './assets/state-mgmt.png';

export const CORE_CONCEPTS = [
  {
    image: componentsImg,
    title: 'Components',
    description:
      'The core UI building block - create the user interface by combining multiple components.',
  },
  {
    image: jsxImg,
    title: 'JSX',
    description:
      'Return HTML/XML code (Dynamically).',
  },
  {
    image: propsImg,
    title: 'Props',
    description:
      'Passed values by its parent component. Make components configurable & reusable.',
  },
  {
    image: stateImg,
    title: 'State',
    description:
      'Each component has its own state. When changed, causes the component to re-render & the UI to update.',
  },
];