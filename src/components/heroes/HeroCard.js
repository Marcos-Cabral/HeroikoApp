import React from 'react'
import { Link } from 'react-router-dom'

export const HeroCard = ({ id, superhero, color }) => {
    return (
        <div className='col-sm-6 col-md-6 col-lg-5 m-1 mb-2 hero-card' style={{ background: color }}>
            <Link to={`/hero/${id}`}>
                <div className='h-100'>
                    <img
                        src={require(`../../heroes/${id}.png`)}
                        className="card-img h-100 img-card-hero"
                        alt={superhero} />
                </div>
                <h5 className='card-title text-center w-100 hero-card-text'>
                    {superhero}</h5>
            </Link >
        </div >
    )
}