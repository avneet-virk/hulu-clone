import React, { forwardRef } from 'react'
import "./Videos.css"
import TextTruncate from 'react-text-truncate';

const base_url = "http://image.tmdb.org/t/p/original/"

const VideoCard = forwardRef(({ movie }, ref) => {
    return (
        <div ref={ref} className='videoCard'>
            <img src={`${base_url}${movie.backdrop_path || movie.poster_path}`} alt='movie poster' />

            <TextTruncate
                line={1}
                element="P"
                truncateText="..."
                text={movie.overview}
            />
            <h2>{movie.title || movie.original_name}{movie.media_type && ` (${movie.media_type})`} </h2>

        </div>
    )
});

export default VideoCard