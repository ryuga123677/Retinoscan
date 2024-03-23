import './navbar2.css'
import logo from './retinoscanImg.jpeg'

const Navbar2 = () =>{
  return(
    <>
      <nav className='navbar2'>
        <div className='navbar-links'>
        <ul>
          <li><img className='retino-img' src={logo} alt="logo"/></li>
          <li><a href="#a" >Home</a></li>
          <li><a href="#b">About Us</a></li>
          <li><a href="#c">Payment & Billing</a></li>
          <li><a href="#d">Privacy Policy</a></li>
          <li><a href="#e">Data Security</a></li>
          <li><a href="#f">Contact US</a></li>
        </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar2