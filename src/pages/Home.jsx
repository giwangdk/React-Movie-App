import React from 'react'
import { Link } from 'react-router-dom'

import { OutlineButton } from '../components/Button';
import Hero from '../components/Hero'

const Home = () => {
    return (
        <>
            <Hero />
            <div className="container">
                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Trending Movies</h2>
                        <Link>
                            <OutlineButton className="small">view more</OutlineButton>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
