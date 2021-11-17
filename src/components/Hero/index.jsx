import React, {useState, useEffect} from 'react'

import {useHistory} from 'react-router-dom'
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Button, { OutlineButton } from '../Button';

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
                // autoplay={{delay:3000}}
            >
                {
                    movieItems.map((item, i) => (
                        <SwiperSlide key={i}>
                            {({ isActive }) => (
                                <HeroItem item={item} className={`${isActive ? 'active' : ''}`}/>
                            )}
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

const HeroItem = props => {
    let history = useHistory()

    const item = props.item
    const background = apiConfig.originalImage(item.backdrop_path ? item.backdrop_path : item.poster_path)

    return (
        <div
            className={`hero-slide__item ${props.className}`}
            style={{backgroundImage:`url(${background})`}} 
        >
            <div className="hero-slide__item__content container">
                
                <div className="hero-slide__item__content__info">
                    <h2 className="title">{item.title}</h2>
                    <div className = "overview" >{item.overview}</div>
                    <div className="btns">
                        <Button onClick={()=>history.push('/movie/' + item.id)}>
                            watch now
                        </Button>
                        <OutlineButton onClick={()=>console.log('trailer')}>
                            watch trailer
                        </OutlineButton>
                    </div>
                </div>
                     
                <div className="hero-slide__item__content__poster">
                    <img src={apiConfig.w500Image(item.poster_path)} alt="" />
                </div>
            </div>

        </div>
    )
}

export default Hero
