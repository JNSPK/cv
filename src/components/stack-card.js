import '../styles/stack-card.scss';

const getColorClass = (tag) => {
  switch (tag.toLowerCase()) {
    case 'openclassrooms':
      return 'tag-openclassrooms';
    // Autre case si autre tag
    default:
      return 'tag-default';
  }
};

const StackCard = (props) => {
  return (
    <div className='card'>
      <div className='logo-container'>
        <img className='logo' alt='Stack logo' src={props.src}></img>
      </div>
      <h1 className='stack-name'>{props.name}</h1>
      <p className='stack-niveau'>{props.niveau}</p>
      <div className='tag-container'>
        {props.tags &&
          props.tags.map((tag, index) => (
            <span key={index} className={`tag ${getColorClass(tag)}`}>
              {tag}
            </span>
          ))}
      </div>
    </div>
  );
};

export default StackCard;
