import React, {useEffect, useState} from "react";
import{ Carousel} from "flowbite-react/"
import { allWeekTrend } from "../modules/FetchHandler"

const HeroCarousel = () => {

    const [top5weekList, settop5weekList] = useState([])

    useEffect(()=> {
        allWeekTrend()
        .then(top5weekList => settop5weekList(top5weekList))
        .catch(error => {
            console.log(error)
        })
    }, [])
    console.log(top5weekList)


    return (
        <div className="w-100 h-56 sm:h-64 xl:h-80 2xl:h-96">
            <Carousel slide={false} className="">
            <div className="flex h-full relative overflow-hidden bg-black">
                    <div className="bg-black flex-auto w-fit z-50">
                        <div className="text-white mt-7 text-4xl ">
                            <span className="uppercase">
                                {(top5weekList[0].hasOwnProperty('name')) ? top5weekList[0].name : top5weekList[0].title }
                            </span>
                        </div>
                        <div className="flex justify-center gap-x-1 text-gray-500 mt-4 text-base">
                            <span className="uppercase">
                                {top5weekList[0].media_type }
                            </span>
                            <span className="uppercase">
                                &#8226; {top5weekList[0].original_language } &#8226;
                            </span>
                            <span>
                                Drama
                                {/* {top5weekList[1].name } */}
                            </span>
                        </div>
                        <div className="text-gray-500 mx-20 mt-4 text-left text-sm">
                            <p className="">
                            {top5weekList[0].overview }
                            </p>
                        </div>
                    </div>
                    
                    <img className="flex-none w-2/5 object-contain md:object-scale-down bg-black shadow-[inset_0_2px_4px_0px_rgba(0,0,0,0.3)]"
                    src={"https://image.tmdb.org/t/p/w500/" + top5weekList[0].backdrop_path }
                    // src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                    alt="..."
                    />
                </div>
                <div className="flex h-full relative overflow-hidden bg-black">
                    <div className="bg-black flex-auto w-fit z-50">
                        <div className="text-white mt-7 text-4xl ">
                            <span className="uppercase">
                                {(top5weekList[1].hasOwnProperty('name')) ? top5weekList[1].name : top5weekList[1].title }
                            </span>
                        </div>
                        <div className="flex justify-center gap-x-1 text-gray-500 mt-4 text-base">
                            <span className="uppercase">
                                {top5weekList[1].media_type }
                            </span>
                            <span className="uppercase">
                                &#8226; {top5weekList[1].original_language } &#8226;
                            </span>
                            <span>
                                Drama
                                {/* {top5weekList[1].name } */}
                            </span>
                        </div>
                        <div className="text-gray-500 mx-20 mt-4 text-left text-sm">
                            <p className="">
                            {top5weekList[1].overview }
                            </p>
                        </div>
                    </div>
                    
                    <img className="flex-none w-2/5 object-contain md:object-scale-down bg-black shadow-[inset_0_2px_4px_0px_rgba(0,0,0,0.3)]"
                    src={"https://image.tmdb.org/t/p/w500/" + top5weekList[1].backdrop_path }
                    // src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                    alt="..."
                    />
                </div>
                <div className="flex h-full relative overflow-hidden bg-black">
                    <div className="bg-black flex-auto w-fit z-50">
                        <div className="text-white mt-7 text-4xl ">
                            <span className="uppercase">
                                {(top5weekList[2].hasOwnProperty('name')) ? top5weekList[2].name : top5weekList[2].title }  
                            </span>
                        </div>
                        <div className="flex justify-center gap-x-1 text-gray-500 mt-4 text-base">
                            <span className="uppercase">
                                {top5weekList[2].media_type }
                            </span>
                            <span className="uppercase">
                                &#8226; {top5weekList[2].original_language } &#8226;
                            </span>
                            <span>
                                Drama
                                {/* {top5weekList[1].name } */}
                            </span>
                        </div>
                        <div className="text-gray-500 mx-20 mt-4 text-left text-sm">
                            <p className="">
                            {top5weekList[2].overview }
                            </p>
                        </div>
                    </div>
                    
                    <img className="flex-none w-2/5 object-contain md:object-scale-down bg-black shadow-[inset_0_2px_4px_0px_rgba(0,0,0,0.3)]"
                    src={"https://image.tmdb.org/t/p/w500/" + top5weekList[2].backdrop_path }
                    // src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                    alt="..."
                    />
                </div>
                <div className="flex h-full relative overflow-hidden bg-black">
                    <div className="bg-black flex-auto w-fit z-50">
                        <div className="text-white mt-7 text-4xl ">
                            <span className="uppercase">
                                {(top5weekList[3].hasOwnProperty('name')) ? top5weekList[3].name : top5weekList[3].title }
                                {/* {top5weekList[3].name } */}
                            </span>
                        </div>
                        <div className="flex justify-center gap-x-1 text-gray-500 mt-4 text-base">
                            <span className="uppercase">
                                {top5weekList[3].media_type }
                            </span>
                            <span className="uppercase">
                                &#8226; {top5weekList[3].original_language } &#8226;
                            </span>
                            <span>
                                Drama
                                {/* {top5weekList[1].name } */}
                            </span>
                        </div>
                        <div className="text-gray-500 mx-20 mt-4 text-left text-sm">
                            <p className="">
                            {top5weekList[3].overview }
                            </p>
                        </div>
                    </div>
                    
                    <img className="flex-none w-2/5 object-contain md:object-scale-down bg-black shadow-[inset_0_2px_4px_0px_rgba(0,0,0,0.3)]"
                    src={"https://image.tmdb.org/t/p/w500/" + top5weekList[3].backdrop_path }
                    // src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                    alt="..."
                    />
                </div>
                <div className="flex h-full relative overflow-hidden bg-black">
                    <div className="bg-black flex-auto w-fit z-50">
                        <div className="text-white mt-7 text-4xl ">
                            <span className="uppercase">
                                {(top5weekList[4].hasOwnProperty('name')) ? top5weekList[4].name : top5weekList[4].title }
                            </span>
                        </div>
                        <div className="flex justify-center gap-x-1 text-gray-500 mt-4 text-base">
                            <span className="uppercase">
                                {top5weekList[4].media_type }
                            </span>
                            <span className="uppercase">
                                &#8226; {top5weekList[4].original_language } &#8226;
                            </span>
                            <span>
                                Drama
                                {/* {top5weekList[1].name } */}
                            </span>
                        </div>
                        <div className="text-gray-500 mx-20 mt-4 text-left text-sm">
                            <p className="">
                            {top5weekList[4].overview }
                            </p>
                        </div>
                    </div>
                    
                    <img className="flex-none w-2/5 object-contain md:object-scale-down bg-black shadow-[inset_0_2px_4px_0px_rgba(0,0,0,0.3)]"
                    src={"https://image.tmdb.org/t/p/w500/" + top5weekList[4].backdrop_path }
                    // src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                    alt="..."
                    />
                </div>
            </Carousel>
        </div>
    )
}

export default HeroCarousel;