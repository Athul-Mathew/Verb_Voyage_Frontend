import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('rzp_device_id');
        localStorage.removeItem('userJWT');
        localStorage.removeItem('rzp_checkout_anon_id');
    
        navigate('/');
      };
  return (
    <div>
        <nav className="bg-black p-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-center flex items-center">
          {/* <img src={logo} alt="Logo" className="w-16 h-16 mx-2" /> */}
          <p className="text-[#FFEA00] text-4xl font-extrabold" style={{ fontFamily: 'Netflix', letterSpacing: '2px' }}>
            Verb Voyage
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <>
            <button className="bg-primary hover:bg-[#FFEA00] text-white hover:text-dark-blue py-2 px-4 rounded-full shadow-md transition duration-300 transform hover:scale-105 focus:outline-none font-bold" onClick={handleLogout}>
              Logout
            </button>

            <Link to="/profile">
              <button className="bg-primary hover:bg-[#FFEA00] text-white hover:text-dark-blue py-2 px-4 rounded-full shadow-md transition duration-300 transform hover:scale-105 focus:outline-none font-bold">
                Profile
              </button>
            </Link>
          </>
        </div>
      </nav>
    </div>
  )
}

export default Navbar