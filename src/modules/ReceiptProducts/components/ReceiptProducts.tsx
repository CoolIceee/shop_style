import { ProductCard } from 'components/productCard/ProductCard'
import { useAppDispatch, useAppSelector } from 'hooks/hooks'
import { useEffect } from 'react'
import { getOneGenderProduct } from 'store/slice/productSlice'

import { ButtonCart } from './buttonBehavior/ButtonCart'
import { ButtonLike } from './buttonBehavior/ButtonLike'

interface ReceiptProductsProps {
  id?: string
  styleContainer: string
}

export const ReceiptProducts: React.FC<ReceiptProductsProps> = ({ id, styleContainer }) => {
  const dispatch = useAppDispatch()
  const product = useAppSelector((state) => state.product.product)
  console.log(id)
  useEffect(() => {
    id != null && dispatch(getOneGenderProduct(id))
  }, [dispatch, id])

  return (
    <div className={styleContainer}>
      {product?.map((item) => {
        return (
          <ProductCard
            key={item._id}
            styleCardContainer={
              'w-[240px] h-[auto] ml-5 mt-5 cursor-pointer overflow-hidden border-[1px] border-gray-200 rounded-[8px] hover:scale-[1.03] transition ease-in shadow-lg shadow-gray-200'
            }
          >
            <div className='w-full h-[80%] relative  overflow-hidden'>
              <ButtonLike />
              <img src={item.photo[0]} className='object-cover w-full h-full' />
            </div>
            <div className='w-[85%] mx-auto'>
              <div className='mt-2'>{item.price} ₽</div>
              <div className='flex items-center'>
                <div>{item.name}</div>
                <ButtonCart product={item} />
              </div>
            </div>
          </ProductCard>
        )
      })}
    </div>
  )
}
