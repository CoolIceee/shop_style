import { useAppDispatch, useAppSelector } from 'hooks/hooks'
import { useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { getCategory } from 'store/slice/categorySlice'

import { CategoriesLoader } from './loader /CategoriesLoader'

export const Categories: React.FC = () => {
  const isPath = useLocation()
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getCategory())
  }, [dispatch])

  const category = useAppSelector((state) => state.category.category)
  const isLoading = useAppSelector((state) => state.category.isLoading)

  return (
    <>
      <div className='text-[0px] md:opacity-100 mx-auto mt-5 w-auto'>
        <ul className='flex justify-between '>
          {isLoading ? (
            <CategoriesLoader />
          ) : (
            <>
              {category?.map((item) => {
                return (
                  <li className='text-xs xl:text-base' key={item._id}>
                    <NavLink className={isPath.pathname === '/' + item._id ? 'border-b-[3px] border-solid border-blue-600' : ''} to={item._id}>
                      {item.name.toUpperCase()}
                    </NavLink>
                  </li>
                )
              })}
              <li className='text-xs xl:text-base'>{`Одежда`.toUpperCase()}</li>
              <li className='text-xs xl:text-base'>{`Аксуссуары`.toUpperCase()}</li>
              <li className='text-xs xl:text-base'>{`Бренды`.toUpperCase()}</li>
            </>
          )}
        </ul>
      </div>
    </>
  )
}
