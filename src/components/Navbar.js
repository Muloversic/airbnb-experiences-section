import logo from '../img/logo.png'
export default function Navbar () {
	return (
		<nav className='nav'>
			<img className='nav__logo' src={logo}/>
		</nav>
	)
}