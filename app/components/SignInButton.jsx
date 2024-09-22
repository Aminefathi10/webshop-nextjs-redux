"use client"
import PersonIcon from '@mui/icons-material/Person';
import { signIn } from 'next-auth';


function SignInButton() {
  return (
    <div onClick={signIn} className="flex flex-col items-center justify-center text-white cursor-pointer hover:text-sky-400 font-semibold">
        <PersonIcon />
        <h3 className="hidden md:block ">login</h3>
    </div>
  )
}

export default SignInButton
