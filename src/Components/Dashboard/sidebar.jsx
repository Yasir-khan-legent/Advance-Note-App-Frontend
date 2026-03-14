import React, { useEffect, useState } from "react";
import "./sidebar.css";
import { Link, NavLink, Outlet } from "react-router-dom";
import { Getname } from "../../Service/Api";
import { isAuthenticated } from "../../Service/Auth.api";

function Sidebar() {
  const [name, setname] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const islogin = isAuthenticated();

  async function getuser() {
    try {
      const res = await Getname();
      console.log(res);
      setname(res.data.name);
    } catch (error) {
      console.log("Frontend error", error);
    }
  }

  useEffect(() => {
    getuser();
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <div className="dashboard-container">
      {/* Mobile Header */}
      <div className="mobile-header">
        <div className="mobile-logo">
          <span><i className="fa-solid fa-book-open-reader"></i></span>
          <span className="mobile-logo-text">Smart Notes</span>
        </div>
        <button 
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <i className={`fa-solid fa-${mobileMenuOpen ? 'times' : 'bars'}`}></i>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={() => setMobileMenuOpen(false)}>
          <div className="mobile-menu-content" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-menu-header">
              <div className="mobile-menu-logo">
                <span><i className="fa-solid fa-book-open-reader"></i></span>
                <span>Smart Notes</span>
              </div>
              <button className="mobile-menu-close" onClick={() => setMobileMenuOpen(false)}>
                <i className="fa-solid fa-times"></i>
              </button>
            </div>
            
            {/* Mobile User Info */}
            {islogin && (
              <div className="mobile-user-info">
                <i className="fa-regular fa-circle-user"></i>
                <span>{name.length > 20 ? name.slice(0, 20) + ".." : name}</span>
              </div>
            )}

            {/* Mobile Navigation Links */}
            <ul className="mobile-nav-links">
              <NavLink to="/dashboard" end className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                <li>
                  <i className="fa-regular fa-house"></i>
                  <span>Public Notes</span>
                </li>
              </NavLink>

              {islogin ? (
                <NavLink to="/dashboard/mynotes" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                  <li>
                    <i className="fa-solid fa-book"></i>
                    <span>My Notes</span>
                  </li>
                </NavLink>
              ) : (
                <NavLink to="/login" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                  <li>
                    <i className="fa-solid fa-book"></i>
                    <span>My Notes</span>
                  </li>
                </NavLink>
              )}

              {islogin ? (
                <NavLink to="/dashboard/savenote" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                  <li>
                    <i className="fa-regular fa-floppy-disk"></i>
                    <span>Save Notes</span>
                  </li>
                </NavLink>
              ) : (
                <NavLink to="/login" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                  <li>
                    <i className="fa-regular fa-floppy-disk"></i>
                    <span>Save Notes</span>
                  </li>
                </NavLink>
              )}

              {islogin && (
                <NavLink to="/dashboard/profile" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                  <li>
                    <i className="fa-regular fa-user"></i>
                    <span>Profile</span>
                  </li>
                </NavLink>
              )}

              {!islogin && (
                <NavLink to="/login" className="mobile-nav-link login-link" onClick={() => setMobileMenuOpen(false)}>
                  <li>
                    <i className="fa-solid fa-right-to-bracket"></i>
                    <span>Login</span>
                  </li>
                </NavLink>
              )}
            </ul>
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <aside className="sidebar">
        <div>
          <div className="mainlogo">
            <span><i className="fa-solid fa-book-open-reader"></i></span>
            <div className='slogo'>Smart Notes</div>
          </div>

          <ul className="menu">
            <NavLink to="/dashboard" end className="nav-link">
              <li>
                <i className="fa-regular fa-house"></i>
                <span>Public Notes</span>
              </li>
            </NavLink>

            {islogin ? (
              <NavLink to="/dashboard/mynotes" className="nav-link">
                <li>
                  <i className="fa-solid fa-book"></i>
                  <span>My Notes</span>
                </li>
              </NavLink>
            ) : (
              <NavLink to="/login" className="nav-link">
                <li>
                  <i className="fa-solid fa-book"></i>
                  <span>My Notes</span>
                </li>
              </NavLink>
            )}

            {islogin ? (
              <NavLink to="/dashboard/savenote" className="nav-link">
                <li>
                  <i className="fa-regular fa-floppy-disk"></i>
                  <span>Save Notes</span>
                </li>
              </NavLink>
            ) : (
              <NavLink to="/login" className="nav-link">
                <li>
                  <i className="fa-regular fa-floppy-disk"></i>
                  <span>Save Notes</span>
                </li>
              </NavLink>
            )}
          </ul>
        </div>

        {islogin ? (
          <div className="profile">
            <i className="fa-regular fa-circle-user"></i>
            <NavLink to="/dashboard/profile" className="nav-link profile-link">
              <p>{name.length > 15 ? name.slice(0, 15) + ".." : name}</p>
            </NavLink>
          </div>
        ) : (
          <div className="login-btn">
            <Link to="/login">
              <i className="fa-solid fa-right-to-bracket"></i> Login
            </Link>
          </div>
        )}
      </aside>

      {/* Bottom Navigation for Mobile */}
      <div className="mobile-bottom-nav">
        <NavLink to="/dashboard" end className="bottom-nav-item" onClick={() => setMobileMenuOpen(false)}>
          <i className="fa-regular fa-house"></i>
          <span>Home</span>
        </NavLink>

        {islogin ? (
          <NavLink to="/dashboard/mynotes" className="bottom-nav-item" onClick={() => setMobileMenuOpen(false)}>
            <i className="fa-solid fa-book"></i>
            <span>My Notes</span>
          </NavLink>
        ) : (
          <NavLink to="/login" className="bottom-nav-item" onClick={() => setMobileMenuOpen(false)}>
            <i className="fa-solid fa-book"></i>
            <span>My Notes</span>
          </NavLink>
        )}

        {islogin ? (
          <NavLink to="/dashboard/savenote" className="bottom-nav-item" onClick={() => setMobileMenuOpen(false)}>
            <i className="fa-regular fa-floppy-disk"></i>
            <span>Save</span>
          </NavLink>
        ) : (
          <NavLink to="/login" className="bottom-nav-item" onClick={() => setMobileMenuOpen(false)}>
            <i className="fa-regular fa-floppy-disk"></i>
            <span>Save</span>
          </NavLink>
        )}

        {islogin ? (
          <NavLink to="/dashboard/profile" className="bottom-nav-item" onClick={() => setMobileMenuOpen(false)}>
            <i className="fa-regular fa-user"></i>
            <span>Profile</span>
          </NavLink>
        ) : (
          <NavLink to="/login" className="bottom-nav-item" onClick={() => setMobileMenuOpen(false)}>
            <i className="fa-solid fa-right-to-bracket"></i>
            <span>Login</span>
          </NavLink>
        )}
      </div>

      {/* Main Content Area - Fixed Scrolling */}
      {/* <main className="main-content">
        <div className="content-wrapper">
          <Outlet />
        </div>
      </main> */}
    </div>
  );
}

export default Sidebar;
