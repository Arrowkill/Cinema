import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {

  {/* This section adds FontAwesome icons to be used */}
  library.add(
    faMagnifyingGlass,
    faXmark,
  )

  {/* CSS Style Constants */}
  {/* This block of CSS handles the navbar as a whole 
    * and ensures it is formatted with the proper font and alignment */}
  const navbar= {
    display: 'flex',
    whiteSpace: 'nowrap',
    outline: 'none',
    boxSizing: 'border-box',
    fontFamily: 'Trebuchet MS',
    backgroundColor: '#171717',
    backgroundSize: 'cover',
    alignItems: 'center',
    justifyContent: 'space-between',
    lineHeight: '40px',
    padding: '0px 100px'
  }

  {/* This block of CSS handles the logo of Enraged Tabby on the navbar */}
  const logo = {
    color: '#e7e9eb',
    fontSize: '30px',
    fontWeight: '600',
    letterSpacing: '-1px'
  }

  {/* This block of CSS handles the navbar options in the center. 
    * This includes formatting the options collectively and individually. 
    * This also includes the hooks for allowing you to hover individually on each link
    * and create a hover effect. */}
  const navbar_option = {
    display: 'flex',
    flex: '1',
    padding: '0px 0px 0px 325px'
  }
  const navbar_option_li = {
    listStyle: 'none',
    padding: '0px 20px'
  }
  const [isHoveringMovies, setIsHoveringMovies] = useState(false);
  const onMouseMoveOnMovies = () => {
    setIsHoveringMovies(true);
  }
  const onMouseMoveOffMovies = () => {
    setIsHoveringMovies(false);
  }
  const navbar_option_li_a_movies = {
    color: isHoveringMovies ? '#00a8e1' : '#e7e9eb',
    fontSize: '20px',
    fontWeight: '500',
    textDecoration: 'none',
    transition: '700ms'
  }
  const [isHoveringShowtimes, setIsHoveringShowtimes] = useState(false);
  const onMouseMoveOnShowtimes = () => {
    setIsHoveringShowtimes(true);
  }
  const onMouseMoveOffShowtimes = () => {
    setIsHoveringShowtimes(false);
  }
  const navbar_option_li_a_showtimes = {
    color: isHoveringShowtimes ? '#00a8e1' : '#e7e9eb',
    fontSize: '20px',
    fontWeight: '500',
    textDecoration: 'none',
    transition: '700ms'
  }
  const [isHoveringOurCinema, setIsHoveringOurCinema] = useState(false);
  const onMouseMoveOnOurCinema = () => {
    setIsHoveringOurCinema(true);
  }
  const onMouseMoveOffOurCinema = () => {
    setIsHoveringOurCinema(false);
  }
  const navbar_option_li_a_ourCinema = {
    color: isHoveringOurCinema ? '#00a8e1' : '#e7e9eb',
    fontSize: '20px',
    fontWeight: '500',
    textDecoration: 'none',
    transition: '700ms'
  }

  {/* This block of CSS handles the searchbar element of the navbar.
    * This includes the fly-in and fly-out as well as the icon switch for the 
    * searchbar. */}
  const [isClickedSearch, setIsClickedSearch] = useState(true);
  const onMouseClickSearch = () => {
    setIsClickedSearch(!isClickedSearch);
  }
  const searchbar = {
    position: 'relative',
    webkitUserSelect: 'none',
    mozUserSelect: 'none',
    msUserSelect: 'none',
    userSelect: 'none'
  }
  const searchbar_input = {
    marginRight: '40px',
    border: '0px',
    padding: isClickedSearch ? '0px' : '0px 10px',
    width: isClickedSearch ? '0px' : '250px',
    height: '35px',
    borderRadius: '3px',
    transition: isClickedSearch ? 'all 0.3s ease' : 'all 0.5s 0.2 ease'
  }
  const searchbar_button = {
    display: 'flex',
    position: 'absolute',
    top: '0px',
    right: '0px',
    width: '40px',
    height: '100%',
    background: 'none',
    color: '#fff',
    transition: 'all 0.5s 0.3s ease'
  }
  const searchbar_button_magnifying = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    opacity: isClickedSearch ? '1' : '0',
    cursor: 'pointer',
    transition: '700ms'
  }
  const searchbar_button_x = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    opacity: isClickedSearch ? '0' : '1',
    cursor: 'pointer',
    transition: '700ms'
  }

  {/* This CSS block creates the divider between the search and sign-in/register 
    * section on the navbar */}
    const divider = {
      borderLeft: '.5px solid white',
      height: '30px',
      marginLeft: '10px'
    }

  {/* This block of CSS handles the sign-in and register links.
    * This section also includes the hooks that allow the hover effect to work. */}
  const [isHoveringSignIn, setIsHoveringSignIn] = useState(false);
  const onMouseMoveOnSignIn = () => {
    setIsHoveringSignIn(true);
  }
  const onMouseMoveOffSignIn = () => {
    setIsHoveringSignIn(false);
  }
  const login_signIn = {
    color: isHoveringSignIn ? '#00a8e1' : '#e7e9eb',
    fontSize: '20px',
    fontWeight: '500',
    textDecoration: 'none',
    transition: '700ms'
  }
  const login_or = {
    color: '#e7e9eb',
    fontSize: '18px',
    fontWeight: '400',
    textDecoration: 'none',
    marginLeft: '2px',
    marginRight: '2px'
    
  }
  const [isHoveringRegister, setIsHoveringRegister] = useState(false);
  const onMouseMoveOnRegister = () => {
    setIsHoveringRegister(true);
  }
  const onMouseMoveOffRegister = () => {
    setIsHoveringRegister(false);
  }
  const login_register = {
    color: isHoveringRegister ? '#00a8e1' : '#e7e9eb',
    fontSize: '20px',
    fontWeight: '500',
    textDecoration: 'none',
    transition: '700ms'
  }

  {/* HTML Tags in React */}
  return (
    <div style={navbar} >
      <div style={logo} >
        Enraged Tabby Cinema
      </div>
      <div style={navbar_option} >
        <li style={navbar_option_li}>
          <a style={navbar_option_li_a_movies} onMouseEnter={onMouseMoveOnMovies} onMouseLeave={onMouseMoveOffMovies} href='#!'>
            Movies
          </a>
        </li>
        <li style={navbar_option_li}>
          <a style={navbar_option_li_a_showtimes} onMouseEnter={onMouseMoveOnShowtimes} onMouseLeave={onMouseMoveOffShowtimes} href='#!'>
            Showtimes
          </a>
        </li>
        <li style={navbar_option_li}>
          <a style={navbar_option_li_a_ourCinema} onMouseEnter={onMouseMoveOnOurCinema} onMouseLeave={onMouseMoveOffOurCinema} href='#!'>
            Our Cinema
          </a>
        </li>
      </div>
      <div style={searchbar} unselectable='off'>
        <input style={searchbar_input} type='text' placeholder='Search' />
        <div style={searchbar_button} >
          <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" style={searchbar_button_magnifying} onClick={onMouseClickSearch} disabled={isClickedSearch} />
          <FontAwesomeIcon icon="fa-solid fa-xmark" style={searchbar_button_x} onClick={onMouseClickSearch} disabled={!isClickedSearch} />
        </div>
      </div>
      <div style={divider} />
      <div style={{whiteSpace: 'nowrap'}}>
        <li style={navbar_option_li}>
          <a style={login_signIn} onMouseEnter={onMouseMoveOnSignIn} onMouseLeave={onMouseMoveOffSignIn} href='#!'>Sign In</a>
          <a style={login_or}> or </a>
          <a style={login_register} onMouseEnter={onMouseMoveOnRegister} onMouseLeave={onMouseMoveOffRegister} href='#!'>Create an Account</a>
        </li>
      </div>
    </div>
  )
}

export default Navbar