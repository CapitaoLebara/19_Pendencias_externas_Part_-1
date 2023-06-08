import React, { useState } from 'react'


//COMPONENTS
import Logo from '../assets/image/Logo.jpg'
import { Input } from '../components/Input/Input'


//NOTIFICATION
import { toast } from 'react-toastify'

//NAVIGATE
import {useNavigate} from 'react-router-dom'
//DB
import {auth} from '../../server/firebase'
import {signInWithEmailAndPassword} from 'firebase/auth'

export const Login = () => {
    // <javascript>

    //ROUTES
    const navigate = useNavigate()
    //USER
    const [email,setEmail]=useState("")
    const [senha,setSenha]=useState("")

    function handleLogin(e){
        e.preventDefault()
        if (email === '' || senha === "") {
          toast.warning("Preencha Todos os Campos")
          return;
        }
        signInWithEmailAndPassword(auth,email,senha)
        .then(()=>{
          toast.success("[SUCESSO] Usuário Logado")
          navigate('/home')

        }).catch(()=>{
          toast.error("[ERRO] Algo deu Errado")
        })
        
    }


    //</javascript>


  return (
    <div className='h-[100vh] w-full flex flex-col items-center  text-white  pt-[2rem]'>
        <img src={Logo} className="max-w-[140px] rounded-full" />

        <form className='w-[370px] text-black mt-[2rem]' onSubmit={handleLogin}>
            <Input type="email" placeholder='Digite seu email...'autoComplete='on'
            value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <Input type="password" placeholder='**********' autoComplete='on'
             value={senha} onChange={(e)=>setSenha(e.target.value)}/>
            <button type='submit' className='h-[36px] w-full rounded border-none bg-[#FFF607] text-[18px] text-black font-medium'>Acessar</button>
        </form>
    </div>
  )
}
