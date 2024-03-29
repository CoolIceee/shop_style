import { useAppSelector } from 'hooks/hooks'
import { NavLink } from 'react-router-dom'

import basketImg from '../../../../assets/basket.png'

export const Basket: React.FC = () => {
  const basket = useAppSelector((state) => state.basket.basket)
  
  return (
    <NavLink className='relative' to='/basket'>
      <img className='max-w-full max-h-full' src={basketImg} alt='basket' />
      {basket.length !== 0 && (
        <div className='bg-red-500 rounded-full flex justify-center absolute items-center bottom-4 left-5 text-white px-1 w-[10px] h-[10px] xl:left-6 xl:bottom-5'></div>
      )}
    </NavLink>
  )
}
