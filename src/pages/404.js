import '../styles/404.scss';
import { Link } from 'react-router-dom';

function Error404() {
  return (
    <div className='container'>
      <div className='title-container'>
        <h1 className='title'>404</h1>
        <span className='zeroji'>😕</span>
      </div>
      <p className='infos'> La page que vous demandez n'existe pas.</p>
      <Link className='back' to='/'>
        🔙
      </Link>
    </div>
  );
}

export default Error404;
