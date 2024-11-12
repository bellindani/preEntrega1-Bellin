import PlusUyLogo from './assets/plusuy.jpg'
import CartWidget from './CartWidget'
import './Navbar.css'

function Navbar() {
  return (
    <nav>
        <img src={PlusUyLogo} alt="Logo" width={100} />

        <ul className='navItems'>
            <li>Inicio</li>
            <li>Servicios</li>
            <li>Contacto</li>
        </ul>

        <CartWidget />
    </nav>
  )
}

export default Navbar
