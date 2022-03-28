import React, { useMemo } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = () => {
  const { heroeId } = useParams();
  const navigate = useNavigate();
  const hero = useMemo(() => getHeroById(heroeId), [heroeId]);
  const { publisher, superhero, alter_ego, first_appearance, characters, color } = hero;

  if (!hero) {
    navigate('/', { replace: true });
  }
  const handleClickReturn = () => {
    navigate(-1);
  }
  return (

    <div className='row mt-5 mb-5 hero-screen-container'>
      <div className='w-100 p-0 m-0 position-relative'>
        <button className='btn font-weight-bold hero-screen-btn-back' onClick={handleClickReturn} > {"<"} </button>
        <div className='w-100 hero-screen-container-image' style={{ backgroundColor: color }}>
          <img
            src={`/HeroikoApp/assets/heroes/${heroeId}.png`} 
            className="card-img w-100 h-100 hero-image-filter"
            alt={superhero} />
        </div>
      </div>
      <div className='p-4 bg-light text-dark' style={{ borderRadius: '0px 0px 10px 10px' }}>
        <div className='d-flex w-100 justify-content-between '>
          <div className='w-100 d-flex align-items-center'>
            <h3 className='hero-text'>
              {superhero}
            </h3>
          </div>

        </div>
        <p className='font-weight-bold' style={{ fontSize: '15px' }}>🕵️‍♂️ {alter_ego}</p>
        <p style={{ fontSize: '15px' }}><b>First appearance 🥇: </b>{first_appearance}</p>
        {
          (alter_ego !== characters)

          && (<><h5>Characters</h5> <p className='card-text'>{characters}</p></>)
        }
        <div >
          <Link to={publisher.includes('DC') ? '/HeroikoApp/dc' : '/HeroikoApp/marvel'} className='w-100 d-flex align-items-center justify-content-end'>
            <img src={`/HeroikoApp/assets/heroes/${publisher}.png`} 
              alt={publisher}
              className='w-50 h-50' style={{ objectFit: 'contain' }}></img>
          </Link>
        </div>
      </div>
    </div>
  )
}
