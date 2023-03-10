import { useNavigate } from 'react-router-dom'

import cap from '../../../../assets/cap.png'

export const Logo: React.FC = () => {
  const navigate = useNavigate()
  return (
    <>
      <button onClick={() => { navigate('/'); }} className='flex justify-center'>
        <img src={cap} alt='cap' className='max-w-full max-h-full' />
      </button>
    </>
  )
}
