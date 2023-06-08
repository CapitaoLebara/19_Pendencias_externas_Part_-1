import {useState,useEffect} from 'react'

import { auth } from '../../server/firebase' 
import {onAuthStateChanged} from 'firebase/auth'

import {Navigate} from 'react-router-dom'
export default function Private({children}){
    const [loading,setLoading]=useState(true)
    const [sign,setSign]=useState(false)

    useEffect(()=>{
        async function checkLogin(){
            const unsub = onAuthStateChanged(auth,(user)=>{
                if(user){
                    const userData={
                        uid:user.id,
                        email:user.email
                    }
                    localStorage.setItem("@deatilUser", JSON.stringify(userData))
                    setLoading(false)
                    setSign(true)
                }else{
                    setLoading(false)
                    setSign(false)
                }
            })
        }
        checkLogin()
    },[])

    if(loading){
        return(
            <div></div>
        )
    }
    if(!sign){
        return <Navigate to='/'/>
    }
    return children
}