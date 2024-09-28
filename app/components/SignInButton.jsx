"use client"
import PersonIcon from '@mui/icons-material/Person';
import { signIn, signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';
import Image from 'next/image';


function SignInButton() {

  const session = useSession();

  return (
    <div onClick={() => {if(session.status === 'unauthenticated') {
                          signIn()
                        } else {
                          signOut()
                        } } }
                         className="flex flex-col items-center justify-center text-white cursor-pointer hover:text-sky-400 font-semibold">
       { session.status === 'authenticated' ? <>
            <Image className='rounded-full' src={session.data.user.image} width={23} height={23} alt='avatar' />
             <h3 className="hidden md:block ">{session.data.user.name.slice(0, session.data.user.name.lastIndexOf(' '))}</h3>
          </> : <>
        <PersonIcon />
        <h3 className="hidden md:block ">Sign In</h3>
       </> 
          
          }
        
    </div>
  )
}

export default SignInButton
