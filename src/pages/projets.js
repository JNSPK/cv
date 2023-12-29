import '../styles/projets.scss';
import Card from '../components/projet-card';
import GameOn from '../img/preview/GameOn.png';
import FishEye from '../img/preview/FishEye.png';
import PetitsPlats from '../img/preview/PetitsPlats.png';
import Billed from '../img/preview/Billed.png';
import Kasa from '../img/preview/Kasa.png';
import SportSee from '../img/preview/SportSee.png';
import ArgentBank from '../img/preview/ArgentBank.png';

const data = [
  {
    name: 'GameOn',
    repoLink: 'https://github.com/JNSPK/P4-GameOn-website-FR',
    demoLink: 'https://jnspk.github.io/P4-GameOn-website-FR',
    description:
      "Gestion d'un formulaire en modale avec Regex pour la vérification des champs",
    img: GameOn,
  },
  {
    name: 'FishEye',
    repoLink: 'https://github.com/JNSPK/P6-OC-Front-End-Fisheye',
    demoLink: 'https://jnspk.github.io/P6-OC-Front-End-Fisheye/',
    description:
      "Mise en place d'un site complet pour photographes axé sur l'accessibilité",
    img: FishEye,
  },
  {
    name: 'Les Petits Plats',
    repoLink: 'https://github.com/JNSPK/P7-OC-les-petits-plats',
    demoLink: 'https://jnspk.github.io/P7-OC-les-petits-plats',
    description:
      "Champ de recherche à la saisie ainsi qu'a l'aide d'un système de tags au sein d'une base de donnée",
    img: PetitsPlats,
  },
  {
    name: 'Billed',
    repoLink: 'https://github.com/JNSPK/P9-SAASRH',
    description: 'Débug et tests unitaires sur un système de note de frais',
    img: Billed,
  },
  {
    name: 'Kasa',
    repoLink: 'https://github.com/JNSPK/P11-KASA',
    demoLink: 'https://jnspk.github.io/P11-KASA',
    description: "Application React pour un site de location d'appartement",
    img: Kasa,
  },
  {
    name: 'SportSee',
    repoLink: 'https://github.com/JNSPK/P12-Sportsee',
    description:
      "Tableau de bord analytique d'application sportive en React avec Recharts",
    img: SportSee,
  },
  {
    name: 'ArgentBank',
    repoLink: 'https://github.com/JNSPK/Argent-Bank',
    description:
      "Interaction avec une API bancaire : Utilisation de MongoDb afin d'enrichir et de modifier une base de donnée. Mise en place d'endpoint API via la documentation Swagger",
    img: ArgentBank,
  },
];

const Projets = () => {
  return (
    <div className='projets-container'>
      {data.map((item, index) => (
        <Card
          key={index}
          src={item.img}
          name={item.name}
          repoLink={item.repoLink}
          demoLink={item.demoLink}
          description={item.description}></Card>
      ))}
    </div>
  );
};

export default Projets;
