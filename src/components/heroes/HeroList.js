import React, {useMemo} from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard'

export const HeroList = ({ publisher }) => {

    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])

    return (
        <div className='row d-flex justify-content-center mb-3' style={{margin:'0 auto'}}>
            {
                heroes.map(hero => (
                    <HeroCard className="col-2"
                        key={hero.id}
                        {...hero} />
                ))
            }
        </div>
    )
}
