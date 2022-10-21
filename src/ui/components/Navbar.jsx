import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setShowNavbar } from '../../store/slices/moviesSlice';
import './navbar.css'

export const Navbar = () => {

    const { navbar } = useSelector(state => state.movies);
    console.log(navbar)
    const dispatch = useDispatch()
    
    useEffect( () => {
        
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                    dispatch(setShowNavbar(true));
            } else dispatch(setShowNavbar(false));  
        });
        return () => {
            window.removeEventListener("scroll", [])
        }
    })

    return (
        <div className={`nav ${navbar && "nav__black"}`}>
            <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/220px-Netflix_2015_logo.svg.png" 
                alt="Netflix Logo" 
                className='nav__logo'
            />
            <div className='nav__items-container'>
                <a className='nav__item'>Inicio</a>
                <a className='nav__item'>Series</a>
                <a className='nav__item'>Peliculas</a>
                <a className='nav__item'>Novedades populares</a>
                <a className='nav__item'>Mi lista</a>
                <a className='nav__item'>Explora por idiomas</a>
            </div>
            
            <img 
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
                alt="Netflix User"
                className='nav__avatar'
            />
        </div>
    )
}
