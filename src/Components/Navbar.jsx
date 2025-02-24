import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-around bg-blue-900 text-white py-2'>
      <div className="logo">
        <span className='font-bold text-xl'>Task</span>
        <span className='font-light text-xl'>Manager</span>
      </div>
      <div className="logo">
        <a href="https://github.com/Rednam-madhavi" target='_blank'>
          <img className='w-9 cursor-pointer' src="/github.svg" alt="" href="" />
        </a>
      </div>
    </nav>
  )
}

export default Navbar