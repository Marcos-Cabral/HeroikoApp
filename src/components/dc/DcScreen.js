import React from 'react'
import { HeroList } from '../heroes/HeroList'

export const DcScreen = () => {
  return (
    <div className='search-container-screen p-0 m-0'>
      <h2 className='p-4 text-center'>Dc Comics</h2>
      <HeroList publisher={'DC Comics'}/>
    </div>
  )
}
