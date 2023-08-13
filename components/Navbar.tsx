"use client";

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const router = useRouter();

  const handleLogoClick = () => {
    router.push("/")
  }

  return (
    <nav className='flex-between flex w-full mb-8 items-center h-20 bg_colour'>

      {/* desktop nav */}
      <div className='sm:flex hidden w-full'>
        <div className='w-full flex justify-between'>
          <div className='w-fit flex items-center ml-4 cursor-pointer' onClick={handleLogoClick}>
            <Image src="/sniper.svg" width={50} height={50} alt='logo' className='object-contain' />
            <h1 className='text-3xl blue_gradient ml-2'>Film Sniper</h1>
          </div>
          <div className='flex mr-10 mt-2'>
            <p className='text-gray-400 mr-10 cursor-pointer hover:text-white' onClick={() => router.push("/about")}>About</p>
            <p className='text-gray-400 cursor-pointer hover:text-white'>Contact</p>
          </div>
        </div>
      </div>

      {/* mobile nav */}
      <div className='sm:hidden mx-auto'>
        <div className='w-fit flex items-center cursor-pointer' onClick={handleLogoClick}>
          <Image src="/sniper.svg" width={40} height={40} alt='logo' className='object-contain ml-2' />
          <h1 className='text-2xl blue_gradient ml-2'>Film Sniper</h1>
        </div>
      </div>
    </nav>
  )
}

export default Navbar