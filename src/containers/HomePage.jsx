import React from "react";
import Header from "../components/Header"
import FooterComponent from "../components/Footer"
import HeroCarousel from "../components/HeroCarousel"
import MovieOfTheWeek from "../components/MovieOfTheWeek";
import TvOfTheWeek from "../components/TvOfTheWeek";



const HomePage = () => {
    return (
        <>
            <Header></Header>
            <HeroCarousel></HeroCarousel>
            <MovieOfTheWeek></MovieOfTheWeek>
            <TvOfTheWeek></TvOfTheWeek>
            <FooterComponent></FooterComponent>
        </>
    )
    
}

export default HomePage