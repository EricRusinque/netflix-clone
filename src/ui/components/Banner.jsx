import './banner.css'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setBanner } from '../../store/slices/moviesSlice';

const baseUrl = 'http://image.tmdb.org/t/p/original';

export const Banner = ({movies}) => {

    const { banner } = useSelector(state => state.movies)

    const dispatch = useDispatch()

    useEffect(()=>{
        // const imageBanner = Math.floor(Math.random() * movies?.length - 1);

        dispatch(setBanner(
            movies[
            Math.floor(Math.random() * movies.length - 1)
        ]))
    },[movies]);

    const truncate = (str, n) => { 
        return str?.length > n ? str.substr(0, n - 1) + " , see more..." : str;
    }

    return (
        <header 
            className='banner'
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(
                    'http://image.tmdb.org/t/p/original${banner?.backdrop_path}'
                )`,
                backgroundPosition: "center center"
                
            }}
        >
            <div className="banner__contents">
                    <h1 className='banner__title'>
                        {
                            banner?.title || banner?.name || banner?.original_name
                        }
                    </h1>
                    <div className="banner__buttons">
                        <button className="banner__button">
                            Play
                        </button>
                        <button className="banner__button">
                            My List
                        </button>
                        <h1 className='banner_description'>
                            {
                               truncate(banner?.overview, 150)
                            }
                        </h1>
                    </div>
            </div>
            <div className='banner--fadeBottom'></div>
        </header>
    )
}
