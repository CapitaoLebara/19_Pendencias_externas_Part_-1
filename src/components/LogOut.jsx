import React from 'react'

//ICON
import {BiLogOut} from 'react-icons/bi'

import { auth } from '../../server/firebase'
import {signOut} from 'firebase/auth'
export const LogOut = (props) => {
    async function handleLogOut(){
        await signOut(auth)
    }
  return (
    <button onClick={handleLogOut}>
        <BiLogOut size={38}  {...props} />
    </button>
  )
}
