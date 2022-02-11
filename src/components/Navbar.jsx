import React, {useState} from 'react'
import {NavLink} from 'react-router-dom';

export default function Navbar(){

	let [open,setOpen]=useState(false);
	
	return(
		<div className='shadow-md w-full fixed top-0 left-0'>
			<div className='md-flex items-center justify-between bg-white py-4 md:px-10 px-7'>
				<div className='font-bold text-2x1 cursor-pointer flex items-center font-[Poppins] text-gray-800'>
					<span className='text-3x1 text-indigo-600 mr-1 pt-2'>
						<ion-icon name='logo-ionic'></ion-icon>
					</span>
					Logo
				</div>
				
				<div onClick={()=>setOpen(!open)} className='text-3x1 absolute right-8 top-6 cursor-pointer md:hidden'>
					<ion-icon name={open ? 'close' : 'menu'}></ion-icon>
				</div>
				<ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 opacity-100' : 'top-[-490px]'} md:opacity-100 opacity-0`}>
				<li className='md:ml-8 text-xl md:my-0 my-7'>
					<NavLink className='text-gray-800 hover:text-gray-400 duration-500' onClick={()=>setOpen(!open)} to='/'>HOME</NavLink>
				</li>
				<li>
					<NavLink className='text-gray-800 hover:text-gray-400 duration-500' onClick={()=>setOpen(!open)} to='/about'>ABOUT</NavLink>				
				</li>
			</ul>	
			</div>
		</div>
	)
};
