
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

function logout() {
    localStorage.removeItem('currentUser')
    window.location.href='/login'
  }

class Header extends Component {
    render(){

        const guestLinks = (
            <>
            
            </>
        )
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Parking slot</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to="/"><a className="nav-link active" aria-current="page" href="#">Home</a></Link>
                        <Link to="/view"><a className="nav-link active" aria-current="page" href="#">Parked vehicles</a></Link>
                        <Link to="/register"><a className="nav-link active" aria-current="page" href="#">Register</a></Link>
                        <Link to="/login"><a className="nav-link active" aria-current="page" href="#">Login</a></Link>
                    <a className="nav-link active" aria-current="page" href="#" onClick={logout}>Logout</a>
                    </div>
                   
                </div>
            </div>
        </nav>
    );
};
}
export default Header;
