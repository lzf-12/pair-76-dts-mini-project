import React from "react";
import mainLogo from '../assets/logo.png'
import ProfilePicture3 from '../assets/ProfilePicture3.png'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const ProfilePages = () => {
    return (
        <>
            <Header></Header>
            <HeroCarousel></HeroCarousel>
            <MovieOfTheWeek></MovieOfTheWeek>
            <FooterComponent></FooterComponent>
        </>
    )
    
}

export default ProfilePages