import '../styles/nav.scss';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <header className='header'>
      <nav className='navbar'>
        <NavLink
          to='/'
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'active' : ''
          }>
          Accueil
        </NavLink>
        <NavLink
          to='/a-propos'
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'active' : ''
          }>
          À Propos
        </NavLink>
        <NavLink
          to='/contact'
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'active' : ''
          }>
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Nav;
