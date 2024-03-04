import React from 'react'
import Items from '../../components/items/Items'
import { GlobalContext } from '../../context/GlobalContext'

export default function Favourites() {

  const {favouritesList} = useContext(GlobalContext);
  
  return (
    <div className='py-8 container mx-auto flex flex-wrap justify-center gap-10'>
      {favouritesList && favouritesList.length > 0 ? (
        favouritesList.map((item) => <Items item = {item} />)
      ) : (
        <div>
          <p className='lg:text-4xl text-xl text-center text-black font-extrabold'>
            Nothing is added in favourites.
          </p>
        </div>
      )}
    </div>
  )
}
