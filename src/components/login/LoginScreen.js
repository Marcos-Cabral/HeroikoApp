import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { useForm } from '../../hooks/useForm';
import { types } from '../../types/types';

export const LoginScreen = () => {
  const navigate = useNavigate();

  const { dispatch } = useContext(AuthContext);
 
  const [formValues, handleInputChange] = useForm({
    userName: ''
  });

  const { userName } = formValues;


  const handleSubmit = (e) => {
    e.preventDefault();
    const lastPath = localStorage.getItem('lastPath') || `${process.env.PUBLIC_URL}/HeroikoApp/`;
    dispatch({
      type: types.login,
      payload: {
        name: userName
      }
    });
    navigate(lastPath, { replace: true });
  }
  return (
    <div className='container p-5' style={{ height: '100vh' }}>
      <h1>You must login to search for heroes 🕵️‍♂️</h1>
      <form onSubmit={handleSubmit} className='d-flex w-100 p-3 justify-content-around align-items-center'>
        <div className='w-100'>
          <input
            type="text"
            placeholder='Example name...'
            className='form-control'
            name="userName"
            value={userName}
            onChange={handleInputChange}
            required />
        </div>
        <div>
          <button className='btn btn-app m-1' type='submit'>Login</button>
        </div>

      </form>
    </div>
  )
}
