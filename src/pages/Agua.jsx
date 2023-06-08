import React from 'react'
import { useState } from 'react'


//PERSONALIT ALERT
import { toast } from 'react-toastify'

//NAVIGATE
import { Link } from 'react-router-dom'

//COMPONENTS
import { Pedido } from '../components/Pedido'
import { HeadGlob } from '../components/HeadGlob'
import { LogOut } from '../components/LogOut'

//DATA BASE
import { db } from '../../server/firebase'
import { addDoc, collection, onSnapshot, query, orderBy, doc, deleteDoc } from 'firebase/firestore'
import { useEffect } from 'react'


export const Agua = () => {

  //<script>
  //VERIFICAR SE EXISTE UM PEDIDO JÁ REGISTRADO PARA EVETIDAR DUPLICIDADE
  const [pedido, setPedido] = useState([])

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
  
  //LOT
  const [lot, setLot] = useState({
    key: '',
    empreendimento: '',
    quadra: '',
    numero: '',
    status: 'Solicitado',
    pedido: 'Água'
  })

  const handleInformations = (e, key) => {
    setLot({ ...lot, [key]: e.target.value })
  }



  //REGISTER LOT
  async function handleRegister(e) {
    e.preventDefault()    
    var Verif_Solicitacao=false

    pedido.map((item,index)=>{
      if(item.empreendimento == lot.empreendimento && item.quadra == lot.quadra.toLocaleUpperCase() && item.numero == lot.numero ){
        Verif_Solicitacao = true
        return
      }
    })

    if (lot.empreendimento == "" || lot.quadra == "" || lot.numero == "") {
      toast.error("Preencha todos os campos obrigatorios")
      return
    }

    if(Verif_Solicitacao==true){
      toast.warning("Esse Pedido já foi solicitada")
      Verif_Solicitacao=false
      return
    }

    if(Verif_Solicitacao==false){
      addDoc(collection(db, "Agua"), {
        empreendimento: lot.empreendimento,
        quadra: lot.quadra.toLocaleUpperCase(),
        numero: lot.numero,
        status: lot.status,
        pedido: lot.pedido,
        created: new Date(),
        cor:"blue",
      }).then(() => {
        setLot({ ...lot, empreendimento: "", quadra: "", numero: "" })
        toast.success("Pedido Enviado")
      })
        .catch((err) => {
          toast.error("[ERROR] Não foi Possivel Registrar")
        })
    }
  }
  //</script>
  
  
  return (
    <>
      <div className='flex flex-col items-center'>

        <HeadGlob>

          <ul className='flex justify-center items-center gap-10'>
            <li ><Link to="Todos-os-pedidos" className=' text-[1.2rem] hover:text-[#FFF607]'>Todas as Solicitações</Link></li>
            <li ><Link to="pedidos-concluido" className=' text-[1.2rem] hover:text-[#FFF607]'>Concluidos</Link></li>
            <li ><Link to="NaoConcluidos" className=' text-[1.2rem] hover:text-[#FFF607]'>Não Concluidos</Link></li>
            <li ><Link to="emandamento" className=' text-[1.2rem] hover:text-[#FFF607]'>Em Andamento</Link></li>
            <LogOut/>
          </ul>
        </HeadGlob>



        <form className='w-[400px]' onSubmit={handleRegister}>
          <h1 className='text-white text-[1.4rem] text-center bg-black rounded p-2 mt-8'> Solicitanção de Agua</h1>
          <div className='flex text-white'>
            <h1 className='border w-full border-black px-4 py-2 text-[1.1rem]'>Empreendimento</h1>
            <select className=' uppercase outline-none text-black w-full font-medium text-center border-black border-t-[2px]'
              value={lot.empreendimento}
              onChange={(e) => handleInformations(e, 'empreendimento')}>
              <option value=""></option>
              <option value="Jurema">Jurema</option>
              <option value="Boa Esperança">Boa Esperança</option>
              <option value="Colinas">Colinas</option>
              <option value="Bosque Real">Bosque Real</option>
              <option value="Bosque Real 2">Bosque Real 2</option>
              <option value="Bem viver">Bem viver</option>
              <option value="Onildo Silva 2">Onildo Silva 2</option>
              <option value="Jardim Imperial">Jardim Imperial</option>

            </select>
          </div>

          <div className='flex text-white'>
            <h1 className='border w-full border-black px-4 py-2 text-[1.1rem]'>Quadra</h1>
            <input className=' uppercase outline-none text-black w-full font-medium text-center border-black border-t-[2px]'
              type="text" value={lot.quadra.toLocaleUpperCase()}
              onChange={(e) => handleInformations(e, 'quadra')} />
          </div>

          <div className='flex text-white'>
            <h1 className='border w-full border-black px-4 py-2 text-[1.1rem]'>Lote</h1>
            <input className=' outline-none text-black w-full font-medium text-center border-black border-y-[2px]'
              type="number" value={lot.numero}
              onChange={(e) => handleInformations(e, 'numero')} />
          </div>

          <button className='bg-[#27272A] text-white border border-black w-full py-2 text-[1.1rem] font-bold' >Enviar</button>
        </form>
      </div>

      {lot.empreendimento !== "" ? (
        <Pedido empreendimento={lot.empreendimento} quadra={lot.quadra} numero={lot.numero} status={lot.status} pedido={lot.pedido} />
      ) :
        (<div></div>)
      }
    </>

  )
}
