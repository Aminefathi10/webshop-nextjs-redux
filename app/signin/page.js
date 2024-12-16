"use client"
import { GitHub } from '@mui/icons-material';
import { Google } from '../assets/svgs';
import { signIn } from 'next-auth/react';
import Image from 'next/image'; 



function Signin() {


  return (
    <div className='flex justify-between overflow-hidden'>
      <div className="flex-1 relative hidden sm:flex justify-center items-center flex-col px-5">
        <Image src='/logo.png' width={500} height={81} alt='logo' />
        <div className='absolute rotate-[-30deg] w-full h-full bg-teal-700 scale-[2] top-[30%] -z-10' />
      </div>
      <div className="flex py-56 flex-col justify-center items-center gap-4 h-screen flex-1">
        <h1 className='text-3xl font-semibold font-display'>Become a member</h1>
        <button onClick={() => {
          signIn('google', {
            callbackUrl: "/"
          })
        }} className="p-4 w-80 h-12 border border-black flex justify-center items-center gap-2 font-semibold backdrop-blur-md">
          <Google className="w-8 h-8" />
          <p>Sign In With Google</p>
        </button>
        <button onClick={() => {
          signIn('github', {
            callbackUrl: '/'
          })
        }} className="p-4 w-80 h-12 border border-black flex justify-center items-center gap-2 font-semibold backdrop-blur-md">
          <GitHub className='text-3xl' />
          <p>Sign In With GitHub</p>
        </button>
      </div>
    </div>
    
  )
}

export default Signin
