import {NavLink} from 'react-router-dom';

export default function Navbar(){
	return(
		<div>
			<ul>
				<li>
					<NavLink to='/'>Home</NavLink>
					<NavLink to='/about'>About</NavLink>
				</li>
				<li>
				
				</li>
			</ul>
		</div>
	)
};
