import {NavLink} from 'react-router-dom';

export default function Navbar(){
	return(
		<div className='shadow-md w-full fixed top-0 left-0'>
			<div className='md-flex items-center justify-between bg-white py-4 md:px-10 px-7'>
				<div className='font-bold text-2x1 cursor-pointer flex items-center font-[Poppins] text-gray-800'>
					<span className='text-3x1 text-indigo-600 mr-1 pt-2'>
						<ion-icon name='logo-ionic'></ion-icon>
					</span>
					<p>Logo</p>
				</div>	
			</div>
			
			
			<ul className='md:flex md:items-center'>
				<li className='md:ml-8 text-xl'>
					<NavLink className='text-gray-800 hover:text-gray-400 duration-500' to='/'>Home</NavLink>
				</li>
				<li>
					<NavLink className='text-gray-800 hover:text-gray-400 duration-500 to='/about'>About</NavLink>				
				</li>
			</ul>
		</div>
	)
};
