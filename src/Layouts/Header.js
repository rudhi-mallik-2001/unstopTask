import React from 'react'

const Header = () => {
  return (
    <div className='w-full flex flex-row justify-start items-center divide-x-2 gap-x-2 p-2 border-b-2 border-gray'>
        <div className='px-2'>
            <p className='text-[20px] text-[#1C4980]'>
                Assessment
            </p>
        </div>
        <div className='mx-2 px-2 '>
            <p className='py-2 text-[20px] border-b-2 border-blue-600'>
                Assessment
            </p>
        </div>
    </div>
  )
}

export default Header