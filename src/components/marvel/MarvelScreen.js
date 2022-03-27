import React from 'react'
import { HeroList } from '../heroes/HeroList'

export const MarvelScreen = () => {
  return (
    <div className='search-container-screen p-0 m-0'>
      <h2 className='p-4 text-center'>Marvel Comics</h2>
      <HeroList publisher={'Marvel Comics'} />
    </div>
  )
}
