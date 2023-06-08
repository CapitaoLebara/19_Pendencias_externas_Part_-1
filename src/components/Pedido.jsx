import React from 'react'
import { Pedido_List } from './Pedido_List'

export const Pedido = (props) => {

    return (
        <div className='text-white flex-col flex my-0 mx-auto max-w-[1200px]'>
            <div className=' flex flex-wrap font-bold p-3 border-solid border-b-4'>
                <div className='w-[5%]'><h1>#</h1></div>
                <div className='w-[19%]'><h1>Empreendimento</h1></div>
                <div className='w-[19%]'><h1>Quadra</h1></div>
                <div className='w-[19%]'><h1>Numero</h1></div>
                <div className='w-[19%]'><h1>Status</h1></div>
                <div className='w-[19%]'><h1>Pedido</h1></div>
            </div>
            <Pedido_List  imagem={props.imagem} empreendimento={props.empreendimento} quadra={props.quadra} numero={props.numero} status={props.status} pedido={props.pedido}/> 
        </div>
    )
}
