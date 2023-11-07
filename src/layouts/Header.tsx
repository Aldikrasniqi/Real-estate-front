import React, { useEffect, useState } from 'react';
import { Link as ScrollLink } from "react-scroll";
import { Link } from 'react-router-dom';
import * as AuthService from '../services/auth-service';
import IUser from '../types/user.type';
// @ts-ignore
const Header: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [showModeratorBoard, setShowModeratorBoard] = useState<boolean>(false);
  const [showAdminBoard, setShowAdminBoard] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<IUser | undefined>(undefined);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowModeratorBoard(user.roles.includes('ROLE_MODERATOR'));
      setShowAdminBoard(user.roles.includes('ROLE_ADMIN'));
    }
    const logOut = () => {
      AuthService.logout();
      setShowModeratorBoard(false);
      setShowAdminBoard(false);
      setCurrentUser(undefined);
    };

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="App">
      <nav className="bg-transparent">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              <div>
                <Link
                  to="/"
                  className="flex items-center py-5 px-2 text-white hover:text-gray-300"
                >
                  <img
                    src="https://www.cryptoverse.vip/brand@2x.png"
                    className="h-10 mr-3"
                    alt="FlowBite Logo"
                  />
                  <span className="font-bold text-2xl">cryproVerse</span>
                </Link>
              </div>

              <div className="hidden md:flex items-center space-x-1"></div>
              {showModeratorBoard && (
                <li className="nav-item">
                  <Link to={'/mod'} className="nav-link">
                    Moderator board
                  </Link>
                </li>
              )}
              {showAdminBoard && (
                <li className="nav-item">
                  <Link to={'/admin'} className="nav-link">
                    Admin board
                  </Link>
                </li>
              )}
              {currentUser && (
                <li className="nav-item">
                  <Link to={'/user'} className="nav-item">
                    User
                  </Link>
                </li>
              )}
            </div>

            {/* {auth && auth.token ? ( */}
            {currentUser ? (
              <div className="hidden md:flex items-center space-x-1 text-zinc-200 hover:text-white">
                <div className="relative">
                  <button
                    onClick={toggleMenu}
                    className="flex items-center focus:outline-none"
                  >
                    {/* <img
                      className="h-8 w-8 rounded-full"
                      src={useri.imageUrl}
                      alt={useri.name}
                    /> */}
                    test
                  </button>
                  {isMenuOpen && (
                    <div className="absolute right-0 mt-2 w-auto bg-white rounded-md shadow-lg py-2">
                      <span className="px-4 py-2 text-sm text-gray-700 font-bold">
                        {/* {user.email} */}
                        test@test.com
                      </span>

                      <hr className="my-1 border-gray-300" />
                      <span className="block px-4 py-2 text-sm text-gray-700 font-bold hover:bg-gray-100 w-full text-left">
                        <Link to="/favorites">Favorites</Link>
                      </span>
                      <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="hidden md:flex items-center space-x-1 text-zinc-200 hover:text-white">
                <Link
                  to="/"
                  className="py-5 px-3 text-zinc-200 hover:text-white text-base active:text-white hover:underline"
                >
                  Home
                </Link>
                <ScrollLink
                  to="about" // The target section's id
                  spy={true}
                  smooth={true}
                  offset={-70} // Adjust this offset as needed
                  duration={500}
                  className="py-5 px-3 text-zinc-200 hover:text-white text-base active:text-white hover:underline cursor-pointer"
                >
                  About Us
                </ScrollLink>
                <Link
                  to="/developers"
                  className="py-5 px-3 text-zinc-200 hover:text-white text-base active:text-white hover:underline"
                >
                  Developers
                </Link>
                <Link
                  to="/register"
                  className="py-2 px-4 bg-[#1DAEFF] text-white font-medium hover:text-white rounded-lg transition duration-300"
                  style={{ boxShadow: '0px 4px 40px 0px #1DAEFF' }}
                >
                  Signup
                </Link>
              </div>
            )}

            <div className="md:hidden flex items-center text-white">
              <button
                className="mobile-menu-button"
                onClick={toggleMenu}
                aria-label="Toggle Menu"
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="mobile-menu md:hidden">
            <Link
              to="/about"
              className="block py-2 px-4 text-sm hover:bg-gray-100 text-white"
            >
              About
            </Link>
            <Link
              to="/"
              className="block py-2 px-4 text-sm hover:bg-gray-100 text-white"
            >
              Home
            </Link>
            <Link
              to="/developers"
              className="block py-2 px-4 text-sm hover:bg-gray-100 text-white"
            >
              Developers
            </Link>
            {/* {auth && auth.token ? ( */}
            {currentUser ? (
              <div>
                <Link to={'/profile'} className="nav-link">
                  {currentUser.username}
                </Link>
                <button className="block py-2 px-4 text-sm hover:bg-gray-200 text-white w-full text-left">
                  Logout
                </button>
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className="block py-2 px-4 text-sm hover:bg-gray-200 text-white"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="block py-2 px-4 text-sm hover:bg-gray-200 text-white"
                >
                  Signup
                </Link>
              </>
            )}
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;
