import React from 'react'

export const Pedido_List = (props) => {
  return (
    <>
   
    <div className='flex flex-wrap px-3 my-2 w-full p-3 border-b-[1px] border-solid border-[#ccc]'>
      <div className='w-[5%]'><h1>{props.id}</h1></div>
      <div className='w-[19%]'><h1>{props.empreendimento}</h1></div>
      <div className='w-[19%]'><h1>{props.quadra}</h1></div>
      <div className='w-[19%]'><h1>{props.numero}</h1></div>
      <div className='w-[19%]'><h1>{props.status}</h1></div>
      <div className='w-[19%]'><h1>{props.pedido}</h1></div>
     
    </div>
    <img src={props.imagem} className="w-[50px]" alt="" />
    </>

  )
}
