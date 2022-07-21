import React from 'react'
import {useState} from 'react'
{/*import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'*/}

const Navbar = () => {
  {/* CSS Style Constants */}
  const navbar= {
    outline: 'none',
    boxSizing: 'border-box',
    fontFamily: 'Trebuchet MS',
    backgroundColor: '#171717',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '50px',
    padding: '0px 100px'
  }
  const logo = {
    color: 'white',
    fontSize: '30px',
    fontWeight: '600',
    letterSpacing: '-1px'
  }
  const navbar_option = {
    display: 'flex',
    flex: '1',
    padding: '0px 0px 0px 350px'
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
    transition: '1s'
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
    transition: '1s'
  }
  const [isHoveringOurCinema, setIsHoveringOurCinema] = useState(false);
  const onMouseMoveOnOurCinema = () => {
    setIsHoveringOurCinema(true);
  }
  const onMouseMoveOffOurCinema = () => {
    setIsHoveringOurCinema(false);
  }
  const navbar_option_li_a_our = {
    color: isHoveringOurCinema ? '#00a8e1' : '#e7e9eb',
    fontSize: '20px',
    fontWeight: '500',
    textDecoration: 'none',
    transition: '1s'
  }

  {/* HTML Tags in React */}
  return (
    <div style={navbar} class='navbar'>
      <div style={logo} class='logo'>
        Enraged Tabby Cinema
      </div>
      <div style={navbar_option} class='navbar-options'>
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
          <a style={navbar_option_li_a_our} onMouseEnter={onMouseMoveOnOurCinema} onMouseLeave={onMouseMoveOffOurCinema} href='#!'>
            Our Cinema
          </a>
        </li>
      </div>
      <div class='searchbar'>
        <input type='text' placeholder='Search'>
        </input>
        {/*<FontAwesome icon='fas fa-search' />*/}
      </div>
      <div>
        |
      </div>
      <div>
        <li style={navbar_option_li}>Sign In or Create an Account</li>
      </div>
    </div>
  )
}

export default Navbar