import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext';
import { useNavigate } from 'react-router-dom';
import { types } from '../../types/types';

export const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {

    dispatch({
      type: types.logout
    });
    navigate('/login', { replace: true });
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <NavLink
        className="navbar-brand"
        to={`/marvel`}
      >
        Heroiko 🦸‍♀️
      </NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink to={`/search`} className="nav-link">
              Search
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={`/marvel`} className="nav-link">
              Marvel
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={`/dc`} className="nav-link">
              DC
            </NavLink>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className='nav-item d-flex align-items-center mr-3'>
            <p className='text-info m-0 p-0'>👋{user.name}</p>
          </li>
          <button className="nav-item nav-link btn" style={{ background: 'none', color: 'white' }}
            onClick={handleLogout}>
            Logout
          </button>
        </ul>
      </div>
    </nav>
  )
}