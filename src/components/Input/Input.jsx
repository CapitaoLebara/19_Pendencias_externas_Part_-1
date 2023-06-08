import React from 'react'

export const Input = (props) => {

    const formInput = 'w-full border-none h-[36px] mb-[16px] rounded py-[18px] outline-none'
  return (
    <input className={formInput} {...props}/>
  )
}
