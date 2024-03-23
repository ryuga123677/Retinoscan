import lang from './language_icon_151284.png'
import './navbar.css'

const Navbar = () =>{
  return(
    <>
    <div className='nav-container'>
      <nav className='navbar'>
        <p class="text">ARTIFICIAL LEARNING SYSTEMS</p>
        <div className='textCont'>
          <div className='lang'>
           <img src={lang} alt="lang" className="img"/>
           </div> 
           <p className='text-english'>English</p>
        </div> 
      </nav>
      </div>
    </>
  )
}

export default Navbar