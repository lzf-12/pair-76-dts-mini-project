import React from "react";
import mainLogo from '../assets/logo.png'
import ProfilePicture1 from '../assets/ProfilePicture1.png'
import ProfilePicture2 from '../assets/ProfilePicture2.png'
import ProfilePicture3 from '../assets/ProfilePicture3.png'
import ProfilePicture4 from '../assets/ProfilePicture4.png'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const ProfilePages = () => {
    return (
        <>
            <div className="text-[#808080] z-0" >
                <div className="ml-3 mr-3 absolute top-3 z-1">
                    <img src={mainLogo} className="h-6 sm:h-9" alt="Main Logo"/>
                </div>
                <div className="relative top-20 text-4xl font-medium text-white z-2">Who's watching</div>
                <div className="flex flex-row gap-x-20 justify-center flex-wrap relative top-[8em] z-3">
                    <div>
                    <Link to="/login">
                        <img src={ProfilePicture1} className="w-[100px] h-[100px]"/>
                        <p className="relative top-5">Murat</p>
                    </Link>    
                    </div>
                    <div>
                    <Link to="/login">
                        <img src={ProfilePicture2} className="w-[100px] h-[100px]"/>
                        <p className="relative top-5">Umut</p>
                    </Link>
                    </div>
                    <div>
                    <Link to="/login">
                        <img src={ProfilePicture3} className="w-[100px] h-[100px]"/>
                        <p className="relative top-5">Kemal</p>
                    </Link>
                    </div>
                    <div>
                    <Link to="/login">
                        <img src={ProfilePicture4} className="w-[100px] h-[100px]"/>
                        <p className="relative top-5">Cocuk</p>
                    </Link>
                    </div>
                    <div>
                        <svg width="100" height="100" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M60 110.625C32.0856 110.625 9.375 87.9144 9.375 60C9.375 32.0856 32.0856 9.375 60 9.375C87.9144 9.375 110.625 32.0856 110.625 60C110.625 87.9144 87.9144 110.625 60 110.625ZM85.7812 55.3079H64.6875V34.2142H55.3125V55.3079H34.2188V64.6829H55.3125V85.7767H64.6875V64.6829H85.7812V55.3079Z" fill="#6D6D6E" fill-opacity="0.7"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M60 0C76.0263 0 91.0941 6.24115 102.426 17.5735C113.759 28.9059 120 43.9737 120 60C120 76.0263 113.759 91.0941 102.426 102.426C91.0941 113.759 76.0263 120 60 120C43.9737 120 28.9059 113.759 17.5735 102.426C6.24115 91.0941 0 76.0263 0 60C0 43.9737 6.24115 28.9059 17.5735 17.5735C28.9059 6.24115 43.9737 0 60 0ZM9.375 60C9.375 87.9144 32.0856 110.625 60 110.625C87.9144 110.625 110.625 87.9144 110.625 60C110.625 32.0856 87.9144 9.375 60 9.375C32.0856 9.375 9.375 32.0856 9.375 60Z" fill="#6D6D6E" fill-opacity="0.7"/>
                        </svg>
                        <p className="relative top-5">Other</p>
                    </div>
                </div>
                
            </div>
            <button className="relative z-10 mx-auto text-[#808080] top-[12em] border-solid border-2 p-2 border-[#808080]"> MANAGE PROFILE</button>
            
        </>
    )
    
}

export default ProfilePages