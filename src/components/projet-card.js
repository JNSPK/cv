import '../styles/projet-card.scss';

const ProjetCard = (props) => {
  return (
    <div className='projet-card'>
      <div className='img-container'>
        <img className='preview' alt='Preview projet' src={props.src}></img>
      </div>
      <h1 className='projet-name'>{props.name}</h1>
      <p className='projet-description'>{props.description}</p>
      <section className='links'>
        <a href={props.repoLink} target='_blank' rel='noopener noreferrer'>
          Repo Github
        </a>
        {props.demoLink && (
          <a href={props.demoLink} target='_blank' rel='noopener noreferrer'>
            Demo
          </a>
        )}
      </section>
    </div>
  );
};

export default ProjetCard;
