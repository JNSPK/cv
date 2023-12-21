import '../styles/aPropos.scss';

const aPropos = (props) => {
  return (
    <div className='apropos-container'>
      <section className='apropos'>
        {' '}
        <img
          className='pp'
          src={props.src}
          alt='Petit minoi du développeur'></img>
        <section className='apropos-content'>
          <h1 className='apropos-title'>À propos de moi:</h1>
          <p className='apropos-description'>
            Hello ! 🤙 Je m'appelle Johan et je suis{' '}
            <span className='word-colored'>développeur web</span>.
            <br />
            Né en 1990 près de Paris je suis féru d'art et plus particulièrement
            de musique, de photographie et de dessin.
            <br />
            C'est naturellement que je me suis tourné vers le{' '}
            <span className='word-colored'>front end</span>.
            <br />
            Je suis <span className='word-colored'>ouvert</span> et à l'écoute
            de toute nouvelle opportunité !
          </p>
        </section>
      </section>
    </div>
  );
};

export default aPropos;
