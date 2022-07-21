import React from "react";
import Header from "../components/Header"
import FooterComponent from "../components/Footer"
import MovieDetail from "../components/MovieDetails";
import MovieOfTheWeek from "../components/MovieOfTheWeek";
import TvOfTheWeek from "../components/TvOfTheWeek";
import { Route, useParams} from "react-router-dom";

const MovieSelected = () => {
    return (
        <>
            <Header></Header>
            <MovieDetail></MovieDetail>
            <MovieOfTheWeek></MovieOfTheWeek>
            <TvOfTheWeek></TvOfTheWeek>
            <FooterComponent></FooterComponent>
        </>
    )
    
}

export default MovieSelected