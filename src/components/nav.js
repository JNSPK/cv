import '../styles/nav.scss';
import { NavLink } from 'react-router-dom';
import github from '../img/github.png';
import linkedin from '../img/linkedin.png';

const Nav = () => {
  return (
    <header className='header'>
      <section className='logo-header'>
        <p className='name-header'>Johan Nilsson</p>
      </section>
      <nav className='navbar'>
        <NavLink
          to='/'
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'active' : ''
          }>
          Accueil
        </NavLink>
        <NavLink
          to='/stack'
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'active' : ''
          }>
          Stack
        </NavLink>
        <NavLink
          to='/projets'
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'active' : ''
          }>
          Projets
        </NavLink>
        <NavLink
          to='/a-propos'
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'active' : ''
          }>
          À Propos
        </NavLink>
        <a
          href='https://github.com/JNSPK'
          className='link'
          target='_blank'
          rel='noopener noreferrer'>
          <img className='link-img' src={github} alt='Github logo'></img>
        </a>
        <a
          href='https://www.linkedin.com/in/johan-nilsson-2ab05a79/'
          className='link'
          target='_blank'
          rel='noopener noreferrer'>
          <img className='link-img' src={linkedin} alt='Github logo'></img>
        </a>
      </nav>
    </header>
  );
};

export default Nav;
