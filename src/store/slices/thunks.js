    import moviesApi from "../../api/moviesApi";
import { setTrendingNow, setNetflixOriginals, startLoadingMovies, setTopRated, setActionMovies, setComedyMovies, setHorrorMovies, setRomanceMovies, setDocumentaries } from '../slices/moviesSlice'

const API_KEY = "b6e12de2a58ffc64eae9bd06c4e47538";

const request = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&languaje=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&languaje=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}


export const getNetflixOriginals = () => {
    return async( dispatch, getState ) => {

        dispatch(startLoadingMovies());
       
        const { data } = await moviesApi.get(request.fetchNetflixOriginals);

            dispatch( setNetflixOriginals({
               movies: data.results
            }))
    }
}

export const getTrending = () => {
    return async( dispatch, getState ) => {
        dispatch(startLoadingMovies());
        const { data } = await moviesApi.get(request.fetchTrending);
        dispatch( setTrendingNow({
           movies: data.results
        }))
    }
}


export const getTopRated = () => {
    return async( dispatch, getState ) => {

        dispatch(startLoadingMovies());

        const { data } = await moviesApi.get(request.fetchTopRated);

        dispatch( setTopRated({
           movies: data.results
        }))
    }
}
export const getActionMovies = () => {
    return async( dispatch, getState ) => {

        dispatch(startLoadingMovies());

        const { data } = await moviesApi.get(request.fetchActionMovies);

        dispatch( setActionMovies({
           movies: data.results
        }))
    }
}
export const getComedyMovies = () => {
    return async( dispatch, getState ) => {

        dispatch(startLoadingMovies());

        const { data } = await moviesApi.get(request.fetchComedyMovies);

        dispatch( setComedyMovies({
           movies: data.results
        }))
    }
}
export const getHorrorMovies = () => {
    return async( dispatch, getState ) => {

        dispatch(startLoadingMovies());

        const { data } = await moviesApi.get(request.fetchHorrorMovies);

        dispatch( setHorrorMovies({
           movies: data.results
        }))
    }
}
export const getRomanceMovies = () => {
    return async( dispatch, getState ) => {

  // console.log(netflixOriginals, trendingNow)
        dispatch(startLoadingMovies());

        const { data } = await moviesApi.get(request.fetchRomanceMovies);

        dispatch( setRomanceMovies({
           movies: data.results
        }))
    }
}
export const getDocumentaries = () => {
    return async( dispatch, getState ) => {

        dispatch(startLoadingMovies());

        const { data } = await moviesApi.get(request.fetchDocumentaries);

        dispatch( setDocumentaries({
           movies: data.results
        }))
    }
}
