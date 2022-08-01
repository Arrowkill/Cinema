import React from 'react'
import {useState} from 'react'

const Feature = () => {
    const featured_movie_section = {
        height: '500px',
        margin: 'auto',
    }
    const featured_movie_title = {
        marginTop: '75px',
        fontSize: '30px',
        fontWeight: '650',
        textAlign: 'center',
    }
    const horizontal_divider = {
        display: 'block',
        height: '1px',
        marginLeft: '7% !important',
        marginRight: '7% !important',
        width: '86%',
        border: '0',
        borderTop: '1.5px solid black',
        margin: '1em 0',
        padding: '0'
    }
    const movie_cards_table = {
        display: 'table',
        height: '450px',
        marginTop: '5px',
        marginLeft: 'auto',
        marginRight: 'auto',
        tableLayout: 'fixed',
        borderCollapse: 'separate',
        borderSpacing: '40px 0px'
    }
    const [isHoverOne, setIsHoverOne] = useState(false)
    const mouseHoverOverOne = () => {
        setIsHoverOne(true)
    }
    const mouseStopHoverOverOne = () => {
        setIsHoverOne(false)
    }
    const movie_card_one = {
        display: 'table-cell',
        height: '450px',
        width: '300px',
        transition: '700ms',
        filter: isHoverOne ? 'drop-shadow(5px 10px 5px gray)' : ''
    }
    const [isHoverTwo, setIsHoverTwo] = useState(false)
    const mouseHoverOverTwo = () => {
        setIsHoverTwo(true)
    }
    const mouseStopHoverOverTwo = () => {
        setIsHoverTwo(false)
    }
    const movie_card_two = {
        display: 'table-cell',
        height: '450px',
        width: '300px',
        transition: '700ms',
        filter: isHoverTwo ? 'drop-shadow(5px 10px 5px gray)' : ''
    }
    const [isHoverThree, setIsHoverThree] = useState(false)
    const mouseHoverOverThree = () => {
        setIsHoverThree(true)
    }
    const mouseStopHoverOverThree = () => {
        setIsHoverThree(false)
    }
    const movie_card_three = {
        display: 'table-cell',
        height: '450px',
        width: '300px',
        transition: '700ms',
        filter: isHoverThree ? 'drop-shadow(5px 10px 5px gray)' : ''
    }
    const [isHoverFour, setIsHoverFour] = useState(false)
    const mouseHoverOverFour = () => {
        setIsHoverFour(true)
    }
    const mouseStopHoverOverFour = () => {
        setIsHoverFour(false)
    }
    const movie_card_four = {
        display: 'table-cell',
        height: '450px',
        width: '300px',
        transition: '700ms',
        filter: isHoverFour ? 'drop-shadow(5px 10px 5px gray)' : ''
    }
    const [isHoverFive, setIsHoverFive] = useState(false)
    const mouseHoverOverFive = () => {
        setIsHoverFive(true)
    }
    const mouseStopHoverOverFive = () => {
        setIsHoverFive(false)
    }
    const movie_card_five = {
        display: 'table-cell',
        height: '450px',
        width: '300px',
        transition: '700ms',
        filter: isHoverFive ? 'drop-shadow(5px 10px 5px gray)' : ''
    }
    return (
        <div style={featured_movie_section}>
            <h3 style={featured_movie_title}>Featured Movies</h3>
            <div style={movie_cards_table}>
                <div style={movie_card_one} onMouseEnter={mouseHoverOverOne} onMouseLeave={mouseStopHoverOverOne}>
                    <img src='https://raw.githubusercontent.com/Arrowkill/Cinema/development/poster1.jpeg' />
                </div>
                <div style={movie_card_two} onMouseEnter={mouseHoverOverTwo} onMouseLeave={mouseStopHoverOverTwo}>
                    <img src='https://raw.githubusercontent.com/Arrowkill/Cinema/development/poster2.jpeg' />
                </div>
                <div style={movie_card_three} onMouseEnter={mouseHoverOverThree} onMouseLeave={mouseStopHoverOverThree}>
                    <img src='https://raw.githubusercontent.com/Arrowkill/Cinema/development/poster3.jpeg' />
                </div>
                <div style={movie_card_four} onMouseEnter={mouseHoverOverFour} onMouseLeave={mouseStopHoverOverFour}>
                    <img src='https://raw.githubusercontent.com/Arrowkill/Cinema/development/poster4.jpeg' />
                </div>
                <div style={movie_card_five} onMouseEnter={mouseHoverOverFive} onMouseLeave={mouseStopHoverOverFive}>
                    <img src='https://raw.githubusercontent.com/Arrowkill/Cinema/development/poster5.jpeg' />
                </div>
            </div>
        </div>
    )
}

export default Feature