import '../styles/stack.scss';
import Card from '../components/stack-card';
import html from '../img/html5.png';
import css from '../img/css3.png';
import js from '../img/js.png';
import react from '../img/react.png';
import sass from '../img/sass.png';
import three from '../img/three.svg';

const Stack = () => {
  return (
    <div className='stack-container'>
      <Card
        name='HTML'
        src={html}
        niveau='Confirmé'
        tags={['Openclassrooms']}></Card>
      <Card
        name='CSS'
        src={css}
        niveau='Confirmé'
        tags={['Openclassrooms', 'Personnel']}></Card>
      <Card
        name='Javascript'
        src={js}
        niveau='Confirmé'
        tags={['Openclassrooms']}></Card>
      <Card
        name='React.js'
        src={react}
        niveau='Confirmé'
        tags={['Openclassrooms']}></Card>
      <Card
        name='Sass'
        src={sass}
        niveau='Intermédiaire'
        tags={['Openclassrooms']}></Card>
      <Card
        name='Three.js'
        src={three}
        niveau='Débutant'
        tags={['Personnel']}></Card>
    </div>
  );
};

export default Stack;
