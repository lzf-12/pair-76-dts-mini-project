import React from "react";
import Header from "../components/Header"
import FooterComponent from "../components/Footer"
import HeroCarousel from "../components/HeroCarousel"
import MovieOfTheWeek from "../components/MovieOfTheWeek";

const HomePage = () => {
    return (
        <>
            <Header></Header>
            <HeroCarousel></HeroCarousel>
            <MovieOfTheWeek></MovieOfTheWeek>
            <FooterComponent></FooterComponent>
        </>
    )
    
}

export default HomePage