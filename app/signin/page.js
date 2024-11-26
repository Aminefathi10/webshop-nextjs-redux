"use client"
import { GitHub } from '@mui/icons-material';
import { Google } from '../assets/svgs';
import { signIn } from 'next-auth/react';
import { EmptyCart } from '../assets/svgs'



function Signin() {


  return (
    <div className='flex justify-between'>
      <div className="hidden md:flex flex-1 justify-center">
        <EmptyCart className='w-4/5' />
      </div>
      <div className="flex py-56 flex-col justify-center items-center gap-4 h-screen flex-1">
        <button onClick={() => {
          signIn('google', {
            callbackUrl: "/"
          })
        }} className="p-4 w-80 h-12 border border-black flex justify-center items-center gap-2">
          <Google className="w-8 h-8" />
          <p>Sign In With Google</p>
        </button>
        <button onClick={() => {
          signIn('github', {
            callbackUrl: '/'
          })
        }} className="p-4 w-80 h-12 border border-black flex justify-center items-center gap-2">
          <GitHub className='text-3xl' />
          <p>Sign In With GitHub</p>
        </button>
      </div>
    </div>
    
  )
}

export default Signin
