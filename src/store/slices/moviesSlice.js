import { createSlice } from '@reduxjs/toolkit'

export const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        navbar: false,
        banner:[],
        trendingNow: [],
        netflixOriginals: [],
        topRated: [],
        actionMovies: [],
        comedyMovies: [],
        horrorMovies: [],
        romanceMovies: [],
        documentaries: [],
        isLoading: false
    },
    reducers: {
        startLoadingMovies: ( state ) => {
            state.isLoading = true;
        },
        setTrendingNow: ( state, { payload } ) => {
            state.isLoading = false;
            state.trendingNow = payload.movies
        },
        setNetflixOriginals: ( state, { payload } ) => {
            state.isLoading = false;
            state.netflixOriginals = payload.movies
        },
        setTopRated: ( state, { payload } ) => {
            state.isLoading = false;
            state.topRated = payload.movies
        },
        setActionMovies: ( state, { payload } ) => {
            state.isLoading = false;
            state.actionMovies = payload.movies
        },
        setComedyMovies: ( state, { payload } ) => {
            state.isLoading = false;
            state.comedyMovies = payload.movies
        },
        setHorrorMovies: ( state, { payload } ) => {
            state.isLoading = false;
            state.horrorMovies = payload.movies
        },
        setRomanceMovies: ( state, { payload } ) => {
            state.isLoading = false;
            state.romanceMovies = payload.movies
        },
        setDocumentaries: ( state, { payload } ) => {
            state.isLoading = false;
            state.documentaries = payload.movies
        },
        setBanner: (state, {payload}) => {
            state.banner = payload
        },
        setShowNavbar: ( state, {payload} ) => {
            state.navbar = payload
        }

        
    }
});

export const { 
                startLoadingMovies,
                setTrendingNow, 
                setNetflixOriginals,
                setTopRated,
                setActionMovies,
                setComedyMovies,
                setHorrorMovies,
                setRomanceMovies,
                setDocumentaries,
                setBanner,
                setShowNavbar,
            } = moviesSlice.actions;