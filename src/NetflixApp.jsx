import React from 'react'
import { Row } from './movies/Row'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getActionMovies, getComedyMovies, getDocumentaries, getHorrorMovies, getNetflixOriginals, getRomanceMovies, getTopRated, getTrending } from './store/slices/thunks';
import { Banner } from './ui/components/Banner';
import { Navbar } from './ui/components/Navbar';

export const NetflixApp = () => {

  // const dispatch =  useDispatch();
  const  { 
    netflixOriginals, 
    trendingNow, 
    topRated, 
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries } = useSelector(state => state.movies);

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getTrending());
      dispatch(getNetflixOriginals());
      dispatch(getTopRated());
      dispatch(getActionMovies());
      dispatch(getComedyMovies());
      dispatch(getHorrorMovies());
    //   dispatch(getRomanceMovies());
    //   dispatch(getDocumentaries());
  }, [])

  return (
    <div className='app'>
        <Navbar/>
        {
            netflixOriginals && <Banner movies={ netflixOriginals }/>

        }
        <Row  
            title="Trending Now"
            movies={netflixOriginals}
            isLargeRow={ true }
        />  
        <Row 
            title="Netflix Originals"
            movies={trendingNow}
        />
        <Row 
            title="Top Rated"
            movies={topRated}
        />
        <Row 
            title="Action Movies"
            movies={actionMovies}
        />
        <Row 
            title="Comedy Movies"
            movies={comedyMovies}
        />
        <Row 
            title="Horror Movies"
            movies={horrorMovies}
        />
        {/* <Row 
            title="Romance Movies"
            movies={romanceMovies}
        /> */}
        {/* <Row 
            title="Documentaries"
            movies={documentaries}
        /> */}

    </div>
  )
}
