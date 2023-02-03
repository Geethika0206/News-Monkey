import React from 'react'
import { Link } from "react-router-dom";

const Navbar=()=> {

    return (
        <div>
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">NewsMonkey</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
        <li className="nav-item" >
          <Link className="nav-a active" aria-current="page" to="/" style={{color:'white'}}>Home</Link>
        </li>
        <li className="nav-item"><Link className="nav-a mx-3" to="/about" style={{color:'white'}}>About</Link></li>
        <li className="nav-item"><Link className="nav-a mx-3" to="/business" style={{color:'white'}}>Business</Link></li>
        <li className="nav-item"><Link className="nav-a mx-3" to="/entertainment" style={{color:'white'}}>Entertainment</Link></li>
        <li className="nav-item"><Link className="nav-a mx-3" to="/general" style={{color:'white'}}>General</Link></li>
        <li className="nav-item"><Link className="nav-a mx-3" to="/health" style={{color:'white'}}>Health</Link></li>
        <li className="nav-item"><Link className="nav-a mx-3" to="/science" style={{color:'white'}}>Science</Link></li>
        <li className="nav-item"><Link className="nav-a mx-3" to="/sports" style={{color:'white'}}>Sports</Link></li>
        <li className="nav-item"><Link className="nav-a mx-3" to="/technology" style={{color:'white'}}>Technology</Link></li>
       </ul>   
    </div>
  </div>
</nav>
      </div>
      </div>
    )
}
export default Navbar
