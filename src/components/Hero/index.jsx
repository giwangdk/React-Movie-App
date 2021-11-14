import React, {useState, useEffect} from 'react'

import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import tmdbApi , {movieType} from '../../api/tmdbApi'
import apiConfig from '../../api/apiConfig';

import './style.scss';

const Hero = () => {

    SwiperCore.use([Autoplay])

    const [movieItems, setMovieItems] = useState([])

    useEffect(() => {
        const getMovies  = async() =>{
            const params = { page: 1 }
            try {
                const response = await tmdbApi.getMovieList(movieType.popular, { params })
                setMovieItems(response.results.slice(1, 4))
                
            } catch (e) {
                console.log(e);
            }
        }
        console.log(movieItems);
        getMovies()
    }, [movieItems])

    return (
        <div className="hero-slide">
            <Swiper
                modules={[Autoplay]}
                grabCursor={true}
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{delay:3000}}
            >
                {
                    movieItems.map((item, i) => (
                        <SwiperSlide key={i}>
                            {({ isActive }) => (
                                <img src={apiConfig.originalImage(item.backdrop_path)} alt="" />
                            )}
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

const

export default Hero