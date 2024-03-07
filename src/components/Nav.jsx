import React from 'react'
import requests from '../requests'
import "./Nav.css"
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div className='nav'>
            <Link to="/trending" onClick={() => {
                localStorage.setItem('title','Trending')
                localStorage.setItem('requestType',requests.fetchTrending)
            }}>
                 Trending
            </Link>
            <Link to="/top-rated" onClick={() => {
                localStorage.setItem('title','Top Rated')
                localStorage.setItem('requestType',requests.fetchTopRated)
            }}>
                 Top Rated
            </Link>
            <Link to="/action" onClick={() => {
                localStorage.setItem('title','Action')
                localStorage.setItem('requestType',requests.fetchActionMOvies)
            }}>
                Action
            </Link>
            <Link to="/comedy" onClick={() => {
                localStorage.setItem('title','Comedy')
                localStorage.setItem('requestType',requests.fetchComedyMovies)
            }}>
                Comedy
            </Link>
            <Link to="/horror" onClick={() => {
                localStorage.setItem('title','Horror')
                localStorage.setItem('requestType',requests.fetchHorrorMovies)
            }}>
                Horror
            </Link>
            <Link to="/romance" onClick={() => {
                localStorage.setItem('title','Romance')
                localStorage.setItem('requestType',requests.fetchRomanceMovies)
            }}>
                Romance
            </Link>
            <Link to="/mystery" onClick={() => {
                localStorage.setItem('title','Mystery')
                localStorage.setItem('requestType',requests.fetchMystery)
            }}>
                Mystery
            </Link>
            <Link to="/sci-fi" onClick={() => {
                localStorage.setItem('title','Sci-fi')
                localStorage.setItem('requestType',requests.fetchSciFiMovies)
            }}>
                Sci-fi
            </Link>
            <Link to="/western" onClick={() => {
                localStorage.setItem('title','Western')
                localStorage.setItem('requestType',requests.fetchWesternMovies)
            }}>
                Western
            </Link>
            <Link to="/animation" onClick={() => {
                localStorage.setItem('title','Animation')
                localStorage.setItem('requestType',requests.fetchAnimationMovies)
            }}>
                Animation
            </Link>
            <Link to="/tv-movie" onClick={() => {
                localStorage.setItem('title','Tv Movie')
                localStorage.setItem('requestType',requests.fetchTv)
            }}>
                Tv Movie
            </Link>
        </div>
    )
}

export default Nav