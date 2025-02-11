'use client'
import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
   <nav className='h-16 bg-purple-700 flex justify-between items-center text-white px-2'>
    <div className="logo font-bold text-lg">
    <Link href="/">Bitlink</Link>
        </div>
    <ul className='flex justify-center items-center gap-3'>
        <Link href="/"><li>Home</li></Link>
        <Link href="/about"><li>About</li></Link>
        <Link href="/shorten"><li>Shorten</li></Link>
        <Link href="/contact"><li>Contact us</li></Link>
    {/* <li className='flex  gap-3'>
        <Link href="/shorten"><button className='bg-purple-400
        shadow-xl px-1 rounded-lg py-1 font-bold text-black'>
        Try Now</button></Link>
        <Link href="/github"><button className='bg-purple-400 
        shadow-xl px-1 rounded-lg py-1 font-bold text-black'>
        GitHub</button></Link>
    </li> */}
    </ul>
   </nav>
  )
}

export default Navbar
