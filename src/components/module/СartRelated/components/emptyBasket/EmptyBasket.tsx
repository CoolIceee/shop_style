import { useAppDispatch } from 'hooks/hooks'
import { NavLink } from 'react-router-dom'
import { getProduct } from 'store/slice/productSlice'

import shopping from '../../../../../assets/shopping.png'

export const EmptyBasket: React.FC = () => {
  const dispatch = useAppDispatch()
  const handleClickItemDataUpdate = (): void => {
    dispatch(getProduct())
  }
  return (
    <div className='flex justify-center items-center flex-col'>
      <img className='h-[150px]' src={shopping} />
      <div className='text-base py-2'>В корзине пока пусто</div>
      <div className='text-xs font-[Montserrat] py-2'>Загляните на главную, чтобы выбрать товары или найдите нужное в поиске</div>
      <NavLink
        onClick={() => {
          handleClickItemDataUpdate()
        }}
        className='text-xs py-3 mt-5 bg-blue-600 text-white rounded-md  font-[Montserrat] p-5'
        to='/'
      >
        Перейти на главную
      </NavLink>
    </div>
  )
}
