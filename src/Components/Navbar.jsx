import React from 'react'

const Navbar = () => {
    return (
        <nav className='flex justify-between bg-blue-900 text-white p-2 mb-5'>
            
            <div className="logo">
                <span className='font-bold mx-7'>TODO</span>
            </div>

            <ul className="flex gap-8 mx-7">
                <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
                <li className='cursor-pointer hover:font-bold transition-all'>About</li>
            </ul>
            
        </nav>
    )
}

export default Navbar
