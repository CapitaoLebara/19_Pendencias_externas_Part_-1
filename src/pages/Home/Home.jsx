import React from 'react'

//CSS
import styles from './Home.module.css'
//IMAGES
import Agua from '../../assets/image/Torneira.png'
import Luz from '../../assets/image/Luz.png'
import Limpeza from '../../assets/image/Limpeza.png'


//NAVIGATE
import { useNavigate } from 'react-router-dom'

//TOAST
import { toast } from 'react-toastify'
import { LogOut } from '../../components/LogOut'





export const Home = () => {

  //<JAVASCRIPT>
  const CSS = `${styles.img} flex flex-col bg-[#FFF607] px-6 py-4 rounded-[8px] items-center hover:scale-105  cursor-pointer`


  const navigate = useNavigate()

  function handleAgua() {

    toast.info("Você Esta Solicitando Água")
    navigate('/Agua')
  }
  function handleLuz() {

    toast.info("Você Esta Solicitando Luz")
    navigate('/Energia')
  }

  function handleLimpeza() {

    toast.info("Você Esta Solicitando Limpeza")
    navigate('/Limpeza')
  }


  //</JAVASCRIPT>

  return (
    <div className='flex flex-col items-center pt-[1.5rem]  max-h-[100vh] w-[100vw] overflow-hidden text-white'>
      <div className='flex justify-evenly mb-[1rem] w-[600px] py-2 rounded  text-center bg-white text-black ' >
        <h1 className=' font-medium ml-[50px] text-[2rem]'>Pendências externas</h1>
        <LogOut className=" text-[#db2629] cursor-pointer " />
      </div>


      <div className='flex items-center w-full h-[50vh] justify-evenly  mx-auto text-black '>

        <div className={`${CSS}`} onClick={handleAgua}>
          <img className='w-[170px]' src={Agua} alt="" />
          <p className='text-[24px] font-bold mt-1'>Água</p>
        </div>
        <div className={`${CSS}`} onClick={handleLuz}>
          <img className='w-[170px]' src={Luz} alt="" />
          <p className='text-[24px] font-bold mt-1'>Luz</p>
        </div>
        <div className={`${CSS}`} onClick={handleLimpeza}>
          <img className='w-[170px]' src={Limpeza} alt="" />
          <p className='text-[24px] font-bold mt-1'>Limpeza</p>
        </div>

      </div>
    </div>
  )
}
