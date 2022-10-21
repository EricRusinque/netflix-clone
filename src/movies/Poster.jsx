import React from 'react'
import './poster.css'

const baseUrl = 'http://image.tmdb.org/t/p/original';


export const Poster = ({
    original_title,
    poster_path,
    isLargeRow, 
    backdrop_path
}) => {

    // console.log( original_title, poster_path)
    return (
        <img src={`${baseUrl}${isLargeRow ? poster_path : backdrop_path}`} alt={original_title} className={`row__poster ${isLargeRow && 'row__posterLarge'}`}/>
    )
}
