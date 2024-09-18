import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatssAppIcon from '@mui/icons-material/Whatsapp';

function Footer() {
  return (
    <footer className="grid grid-cols-2 ms:grid-cols-3 md:grid-cols-4 bg-slate-600 text-white justify-items-center px-1 py-4">
      <div className='p-3'>
        <h1 className='text-xl font-bold '>Customer service</h1>
        <p className='font-semibold hover:underline hover:text-yellow-400 cursor-pointer text-gray-300'>Help Center</p>
        <p className='font-semibold hover:underline hover:text-yellow-400 cursor-pointer text-gray-300'>Transaction Services Agreement for non-EU/UK Consumers</p>
        <p className='font-semibold hover:underline hover:text-yellow-400 cursor-pointer text-gray-300'>Terms and Conditions for EU/EEA/UK Consumers (Transactions)</p>
        <p className='font-semibold hover:underline hover:text-yellow-400 cursor-pointer text-gray-300'>Take our feedback survey</p>
      </div>
      <div className='p-3'>
        <h1 className='text-xl font-bold '>Collaborate with us</h1>
        <p className='font-semibold hover:underline hover:text-yellow-400 cursor-pointer text-gray-300'>Partnerships</p>
        <p className='font-semibold hover:underline hover:text-yellow-400 cursor-pointer text-gray-300'>Affiliate program</p>
        <p className='font-semibold hover:underline hover:text-yellow-400 cursor-pointer text-gray-300'>DS Center</p>
        <p className='font-semibold hover:underline hover:text-yellow-400 cursor-pointer text-gray-300'>Seller Log In</p>
      </div>
      <div className='p-3'>
        <h1 className='text-xl font-bold '>Pay With</h1>
      <div className='flex flex-wrap gap-1'>
        <span><img className='h-6' src="https://img className='h-6'.alicdn.com/tfs/TB1xcMWdEKF3KVjSZFEXXXExFXa-68-48.png" alt="" /></span>
        <span className='-ml-1'><img className='h-6' src="https://ae01.alicdn.com/kf/S7b20ce778ba44e60a062008c35e98b57M/216x144.png" alt="" /></span>
        <span><img className='h-6' src="https://ae01.alicdn.com/kf/Sea8b6d9e957a4b4783785f087af30ba2r/216x144.png" alt="" /></span>
        <span><img className='h-6' src="https://ae01.alicdn.com/kf/S91ee3e0f4fde4535aad35f7c30f6bacfh/216x144.png" alt="" /></span>
        <span><img className='h-6' src="https://ae01.alicdn.com/kf/S8df1a1d99c8049d1b1a86c9a144719b6W/216x144.png" alt="" /></span>
        <span><img className='h-6' src="https://ae01.alicdn.com/kf/S173da9e53a234dcb9795cebd1856c4d7J/216x144.png" alt="" /></span>
        <span><img className='h-6' src="https://ae01.alicdn.com/kf/Sa4a89534ef694f1c8877ae3d864db6acz/216x144.png" alt="" /></span>
        <span><img className='h-6' src="https://ae01.alicdn.com/kf/S85aba413145f4b479fc18825603f87aaZ/216x144.png" alt="" /></span>
        <span><img className='h-6' src="https://ae01.alicdn.com/kf/S0321450614244c4dafba2517560de3b8s/216x144.png" alt="" /></span>
        <span><img className='h-6' src="https://ae01.alicdn.com/kf/Sffbd9fb9807e42d9a32feda7bc09121cA/216x144.png" alt="" /></span>
        <span><img className='h-6' src="https://ae01.alicdn.com/kf/S7774cbfd89914cad85c8b548087820308/216x144.png" alt="" /></span>
        <span><img className='h-6' src="https://ae01.alicdn.com/kf/Sf9caac85ebcd470a95d0ff441ebf609fc/216x144.png" alt="" /></span>
        <span><img className='h-6' src="https://ae01.alicdn.com/kf/S2a5881f5906b4fb58a0c6da600ddf7bf1/216x144.png" alt="" /></span>
        </div>
      </div>
      <div className='p-3'>
        <h1 className='text-xl font-bold '>Visit Us on</h1>
        <span className='hover:text-yellow-400 cursor-pointer mr-1'><FacebookIcon /></span>
        <span className='hover:text-yellow-400 cursor-pointer mr-1'><TwitterIcon /></span>
        <span className='hover:text-yellow-400 cursor-pointer mr-1'><InstagramIcon /></span>
        <span className='hover:text-yellow-400 cursor-pointer mr-1'><WhatssAppIcon /></span>
      </div>
      <div className='p-3 min-w-56 col-span-2'>
        <h1 className='text-xl font-bold '>Help</h1>
        <div className='font-semibold text-gray-300 flex flex-wrap gap-1'>
          <span className='cursor-pointer hover:text-yellow-400'>Help Center,</span>
          <span className='cursor-pointer hover:text-yellow-400'>Disputes & Reports,</span>
          <span className='cursor-pointer hover:text-yellow-400'>Buyer Protection,</span>
          <span className='cursor-pointer hover:text-yellow-400'>Report IPR infringement,</span>
          <span className='cursor-pointer hover:text-yellow-400'> Regulated Information,</span>
          <span className='cursor-pointer hover:text-yellow-400'> Integrity Compliance,</span>
          <span className='cursor-pointer hover:text-yellow-400'> Transparency Center,</span>
          <span className='cursor-pointer hover:text-yellow-400'> Submit report (non-registered users)</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
