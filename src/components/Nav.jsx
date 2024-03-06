import React from 'react'
import requests from '../requests'
import "./Nav.css"
import { Link } from 'react-router-dom'

const Nav = ({setTitle,setSelectedOption}) => {

    return (
        <div className='nav'>
            <Link to="/trending" onClick={() => {
                setTitle('Trending')
                setSelectedOption(requests.fetchTrending)
            }}>
                 Trending
            </Link>
            <Link to="/top-rated" onClick={() => {
                setTitle('Top Rated')
                setSelectedOption(requests.fetchTopRated)
            }}>
                 Top Rated
            </Link>
            <Link to="/action" onClick={() => {
                setTitle('Action')
                setSelectedOption(requests.fetchActionMOvies)
            }}>
                Action
            </Link>
            <Link to="/comedy" onClick={() => {
                setTitle('Comedy')
                setSelectedOption(requests.fetchComedyMovies)
            }}>
                Comedy
            </Link>
            <Link to="/horror" onClick={() => {
                setTitle('Horror')
                setSelectedOption(requests.fetchHorrorMovies)
            }}>
                Horror
            </Link>
            <Link to="/romance" onClick={() => {
                setTitle('Romance')
                setSelectedOption(requests.fetchRomanceMovies)
            }}>
                Romance
            </Link>
            <Link to="/mystery" onClick={() => {
                setTitle('Mystery')
                setSelectedOption(requests.fetchMystery)
            }}>
                Mystery
            </Link>
            <Link to="/sci-fi" onClick={() => {
                setTitle('Sci-fi')
                setSelectedOption(requests.fetchSciFiMovies)
            }}>
                Sci-fi
            </Link>
            <Link to="/western" onClick={() => {
                setTitle('Western')
                setSelectedOption(requests.fetchWesternMovies)
            }}>
                Western
            </Link>
            <Link to="/animation" onClick={() => {
                setTitle('Animation')
                setSelectedOption(requests.fetchAnimationMovies)
            }}>
                Animation
            </Link>
            <Link to="/tv-movie" onClick={() => {
                setTitle('Tv Movie')
                setSelectedOption(requests.fetchAnimationMovies)
            }}>
                Tv Movie
            </Link>
        </div>
    )
}

export default Nav