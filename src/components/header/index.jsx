import React, { useRef, useEffect } from 'react'
import {useLocation, Link} from 'react-router-dom'
import './style.scss';

import logo from '../../assets/tmovie.png';

const headerNav = [
    {
        display: 'Home',
        path: '/'
    },
    {
        display: 'Movies',
        path: '/movie'
    },
    {
        display: 'Tv Series',
        path: '/tv'
    }
    
]

export default function Header() {

    const { pathname } = useLocation();
    const headerRef= useRef(null);

    const active = headerNav.findIndex(e => e.path === pathname);

    useEffect(() => {
        const shrinkHeader = () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                headerRef.current.classLit.add('shrink')
            } else {
                headerRef.current.classLit.remove('shrink')
            }
        }
        window.addEventListener('scroll' , shrinkHeader)
        return () => {
            window.removeEventListener('scroll', shrinkHeader)
        }
    }, [])

    return (
        <div ref={headerRef} className="header">
            <div className="header__wrap container">
                <div className="logo">
                    <img src={logo} alt="" />
                    <Link to="/">tMovies</Link>
                </div>
                <ul className="header__nav">
                    {
                        headerNav.map((e,i) => (
                            <li key={i} className={`${i === active} ? 'active : '' `}>
                                <Link to={e.path}>
                                    {e.display}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}
