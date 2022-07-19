import React, {useEffect, useState} from "react";
import{ Carousel} from "flowbite-react/"
import { moviesWeekTrend } from "../modules/FetchHandler"

const MovieOfTheWeek = () => {

    const [movieWeekList, setmovieWeekList] = useState([])

    useEffect(()=> {
        moviesWeekTrend()
        .then(movieWeekList => setmovieWeekList(movieWeekList))
        .catch(error => {
            console.log(error)
        })
    }, [])
    console.log(movieWeekList)


    return (
        <div className="w-100 h-56 sm:h-64 xl:h-80 2xl:h-96">
            <Carousel slide={false} indicators={false} className="">
            <div className="flex h-full relative overflow-hidden bg-black">
                    <div className="bg-black flex-auto w-fit z-50">
                        <div className="text-white mt-7 text-4xl ">
                            <span className="uppercase">
                                {(movieWeekList[0].hasOwnProperty('name')) ? movieWeekList[0].name : movieWeekList[0].title }
                            </span>
                        </div>
                        <div className="flex justify-center gap-x-1 text-gray-500 mt-4 text-base">
                            <span className="uppercase">
                                {movieWeekList[0].media_type }
                            </span>
                            <span className="uppercase">
                                &#8226; {movieWeekList[0].original_language } &#8226;
                            </span>
                            <span>
                                Drama
                                {/* {movieWeekList[1].name } */}
                            </span>
                        </div>
                        <div className="text-gray-500 mx-20 mt-4 text-left text-sm">
                            <p className="">
                            {movieWeekList[0].overview }
                            </p>
                        </div>
                    </div>
                    
                    <img className="flex-none w-2/5 object-contain md:object-scale-down bg-black shadow-[inset_0_2px_4px_0px_rgba(0,0,0,0.3)]"
                    src={"https://image.tmdb.org/t/p/w500/" + movieWeekList[0].backdrop_path }
                    // src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                    alt="..."
                    />
                </div>
                <div className="flex h-full relative overflow-hidden bg-black">
                    <div className="bg-black flex-auto w-fit z-50">
                        <div className="text-white mt-7 text-4xl ">
                            <span className="uppercase">
                                {(movieWeekList[1].hasOwnProperty('name')) ? movieWeekList[1].name : movieWeekList[1].title }
                            </span>
                        </div>
                        <div className="flex justify-center gap-x-1 text-gray-500 mt-4 text-base">
                            <span className="uppercase">
                                {movieWeekList[1].media_type }
                            </span>
                            <span className="uppercase">
                                &#8226; {movieWeekList[1].original_language } &#8226;
                            </span>
                            <span>
                                Drama
                                {/* {movieWeekList[1].name } */}
                            </span>
                        </div>
                        <div className="text-gray-500 mx-20 mt-4 text-left text-sm">
                            <p className="">
                            {movieWeekList[1].overview }
                            </p>
                        </div>
                    </div>
                    
                    <img className="flex-none w-2/5 object-contain md:object-scale-down bg-black shadow-[inset_0_2px_4px_0px_rgba(0,0,0,0.3)]"
                    src={"https://image.tmdb.org/t/p/w500/" + movieWeekList[1].backdrop_path }
                    // src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                    alt="..."
                    />
                </div>
                <div className="flex h-full relative overflow-hidden bg-black">
                    <div className="bg-black flex-auto w-fit z-50">
                        <div className="text-white mt-7 text-4xl ">
                            <span className="uppercase">
                                {(movieWeekList[2].hasOwnProperty('name')) ? movieWeekList[2].name : movieWeekList[2].title }  
                            </span>
                        </div>
                        <div className="flex justify-center gap-x-1 text-gray-500 mt-4 text-base">
                            <span className="uppercase">
                                {movieWeekList[2].media_type }
                            </span>
                            <span className="uppercase">
                                &#8226; {movieWeekList[2].original_language } &#8226;
                            </span>
                            <span>
                                Drama
                                {/* {movieWeekList[1].name } */}
                            </span>
                        </div>
                        <div className="text-gray-500 mx-20 mt-4 text-left text-sm">
                            <p className="">
                            {movieWeekList[2].overview }
                            </p>
                        </div>
                    </div>
                    
                    <img className="flex-none w-2/5 object-contain md:object-scale-down bg-black shadow-[inset_0_2px_4px_0px_rgba(0,0,0,0.3)]"
                    src={"https://image.tmdb.org/t/p/w500/" + movieWeekList[2].backdrop_path }
                    // src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                    alt="..."
                    />
                </div>
                <div className="flex h-full relative overflow-hidden bg-black">
                    <div className="bg-black flex-auto w-fit z-50">
                        <div className="text-white mt-7 text-4xl ">
                            <span className="uppercase">
                                {(movieWeekList[3].hasOwnProperty('name')) ? movieWeekList[3].name : movieWeekList[3].title }
                                {/* {movieWeekList[3].name } */}
                            </span>
                        </div>
                        <div className="flex justify-center gap-x-1 text-gray-500 mt-4 text-base">
                            <span className="uppercase">
                                {movieWeekList[3].media_type }
                            </span>
                            <span className="uppercase">
                                &#8226; {movieWeekList[3].original_language } &#8226;
                            </span>
                            <span>
                                Drama
                                {/* {movieWeekList[1].name } */}
                            </span>
                        </div>
                        <div className="text-gray-500 mx-20 mt-4 text-left text-sm">
                            <p className="">
                            {movieWeekList[3].overview }
                            </p>
                        </div>
                    </div>
                    
                    <img className="flex-none w-2/5 object-contain md:object-scale-down bg-black shadow-[inset_0_2px_4px_0px_rgba(0,0,0,0.3)]"
                    src={"https://image.tmdb.org/t/p/w500/" + movieWeekList[3].backdrop_path }
                    // src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                    alt="..."
                    />
                </div>
                <div className="flex h-full relative overflow-hidden bg-black">
                    <div className="bg-black flex-auto w-fit z-50">
                        <div className="text-white mt-7 text-4xl ">
                            <span className="uppercase">
                                {(movieWeekList[4].hasOwnProperty('name')) ? movieWeekList[4].name : movieWeekList[4].title }
                            </span>
                        </div>
                        <div className="flex justify-center gap-x-1 text-gray-500 mt-4 text-base">
                            <span className="uppercase">
                                {movieWeekList[4].media_type }
                            </span>
                            <span className="uppercase">
                                &#8226; {movieWeekList[4].original_language } &#8226;
                            </span>
                            <span>
                                Drama
                                {/* {movieWeekList[1].name } */}
                            </span>
                        </div>
                        <div className="text-gray-500 mx-20 mt-4 text-left text-sm">
                            <p className="">
                            {movieWeekList[4].overview }
                            </p>
                        </div>
                    </div>
                    
                    <img className="flex-none w-2/5 object-contain md:object-scale-down bg-black shadow-[inset_0_2px_4px_0px_rgba(0,0,0,0.3)]"
                    src={"https://image.tmdb.org/t/p/w500/" + movieWeekList[4].backdrop_path }
                    // src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                    alt="..."
                    />
                </div>
            </Carousel>
        </div>
    )
}

export default MovieOfTheWeek;