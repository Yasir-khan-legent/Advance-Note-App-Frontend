import React from 'react';
import { Createnotes } from '../../../Service/Api';
import './navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    async function postdata() {
        try {
            const data = {
                title: 'Abc',
                note: '12345',
                status: 'Pending',
            };
            const result = await Createnotes(data);
            console.log(result.data);
        } catch (error) {
            console.log('error agya h ', error.message);
        }
    }

    return (
        <div>
            <div className='navbar'>
                <div className='logo'>
                    <span>
                        <i className="fa-solid fa-book-open-reader"></i>
                    </span>
                    Smart Notes
                </div>

                <div className='links'>
                    <Link to='/'>Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/dashboard">Notes</Link>
                    <Link to='/contact'>Contact</Link>

                    {/* Desktop Login Button */}
                   <Link to='/login' className='login-button'>
  <button>
    <i className="fa-solid fa-right-to-bracket"></i>
    <span> Login</span>
  </button>
</Link>

                     {/* Mobile Notes Icon */}
    <span className='mnotes'>
        <Link to='/dashboard'>
            <i className="fa-solid fa-note-sticky"></i>
        </Link>
    </span>
                    {/* Mobile Login Icon */}
                    <span className='mlogin'>
                   
                        <Link to='/login'>
                            <i className="fa-solid fa-right-to-bracket"></i>
                        </Link>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Navbar;