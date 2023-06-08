import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

//NAVIGATE
import { Link } from 'react-router-dom'


//COMPONENTS
import { HeadGlob } from '../../HeadGlob'
import { LogOut } from '../../LogOut'
import { Pedido_List } from '../../Pedido_List'


//DATA BASE
import { db } from '../../../../server/firebase'
import { addDoc, collection, onSnapshot, query, orderBy, doc, deleteDoc } from 'firebase/firestore'

export const Clear = () => {

    //<script>

    //ALL PEDIDOS
    const [pedido, setPedido] = useState([])
    const pedido_concluido = []
    useEffect(() => {

        const Ref_Pedido = collection(db, "Agua")
        const queryRef = query(Ref_Pedido, orderBy("created", 'asc'))
        const unsub = onSnapshot(queryRef, (snapshot) => {
            const list = []
            snapshot.forEach((doc) => {
                list.push({
                    id: doc.id,
                    empreendimento: doc.data().empreendimento,
                    quadra: doc.data().quadra,
                    numero: doc.data().numero,
                    status: doc.data().status,
                    pedido: doc.data().pedido

                })
            })
            setPedido(list)
            
            
        })

    }, [])

    //PEDIDOS CONCLUIDOS
    pedido.forEach((item) => {
        if (item.status == "Concluido") {
            pedido_concluido.push(item)
        }
    })

    //</script>

    return (
        <>
            <HeadGlob>
                <ul className='flex justify-center items-center gap-10'>
                    <li ><Link to="/Agua" className=' text-[1.2rem] hover:text-[#FFF607]'>Solicitação de Agua</Link></li>
                    <li ><Link to="../Agua/Todos-os-pedidos" className=' text-[1.2rem] hover:text-[#FFF607]'>Todas as Solicitações</Link></li>
                    <li ><Link to="../Agua/NaoConcluidos" className=' text-[1.2rem] hover:text-[#FFF607]'>Não Concluidos</Link></li>
                    <li ><Link to="../Agua/emandamento" className=' text-[1.2rem] hover:text-[#FFF607]'>Em Andamento</Link></li>
                    <LogOut />
                </ul>
            </HeadGlob>

            <div className='text-white flex-col flex my-0 mx-auto max-w-[1200px]'>
                <div className=' flex flex-wrap font-bold p-3 border-solid border-b-4'>
                    <div className='w-[5%]'><h1>#</h1></div>
                    <div className='w-[19%]'><h1>Empreendimento</h1></div>
                    <div className='w-[19%]'><h1>Quadra</h1></div>
                    <div className='w-[19%]'><h1>Numero</h1></div>
                    <div className='w-[19%]'><h1>Status</h1></div>
                    <div className='w-[19%]'><h1>Pedido</h1></div>
                </div>
                <div>
                </div>
                {pedido_concluido.map((item, index) => (
                    <Pedido_List id={index} empreendimento={item.empreendimento} quadra={item.quadra} numero={item.numero} status={item.status} pedido={item.pedido} />
                ))}

            </div>
        </>
    )
}
