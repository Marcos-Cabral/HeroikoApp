import React, { useMemo } from 'react'
import queryString from 'query-string';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroByName } from '../../selectors/getHeroByName';

export const SearchScreen = () => {
    const navigate = useNavigate();
    const location = useLocation();

    var { q = '' } = queryString.parse(location.search);

    const [formValues, handleInputChange] = useForm({
        searchText: q
    });

    const { searchText } = formValues;

    const heroesFiltered = useMemo(() => getHeroByName(q), [q]);

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`?q=${searchText}`);
    }

    return (
        <div className='search-container-screen container p-0 m-0'>
            <h2 className='p-4 text-center'>Search heroes</h2>
            <div className='row'>
                <div className='w-100 p-3 d-flex'>
                    <form onSubmit={handleSubmit} className='d-flex w-100 p-3 justify-content-around align-items-center'>
                        <div className='w-100'>
                            <input
                                type="text"
                                placeholder='find heroes'
                                className='form-control'
                                name="searchText"
                                value={searchText}
                                onChange={handleInputChange} />
                        </div>
                        <div>
                            <button className='btn btn-app m-1' type='submit'>Search</button>
                        </div>

                    </form>
                </div>

                <div className='row d-flex justify-content-center mb-3' style={{margin:'0 auto'}}>  
                    {
                        heroesFiltered.map(hero => (
                            <HeroCard
                                key={hero.id}
                                {...hero} />
                        ))
                    }
                </div>
            </div>
        </div >
    )
}
