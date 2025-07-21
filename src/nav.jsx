import React ,{ useState ,useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Nav() {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  return (
    <>
   <nav className={`navbar navbar-expand-lg ${isScrolled ? 'py-2' : 'py-4'}`}>
  <div className="container">
    <Link className="navbar-brand" to='/'>Start Framework</Link>
    <button className="navbar-toggler border-1 border-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon d-flex justify-content-center align-items-center" ><i className="fa-solid fa-bars" style={{color: '#fafafa'}} /></span></button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <NavLink className="nav-link p-2 " aria-current="page" to='/about'>About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link p-2" to='/portfolio'>Portfolio</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link p-2" to='/contact'>Contact</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>
  )
}
