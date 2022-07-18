import React, {useEffect, useState} from "react";
import{ Carousel} from "flowbite-react/"
import {allWeekTrend} from "../modules/FetchHandler"
import poster1 from "../assets/poster/1.jpg"
import poster2 from "../assets/poster/2.jpg"
import poster3 from "../assets/poster/3.jpg"
import poster4 from "../assets/poster/4.jpg"
import poster5 from "../assets/poster/5.jpg"

const CarouselComponent = () => {

    // const [top5weekList, settop5weekList] = useState([])

    // useEffect(()=> {
    //     allWeekTrend()
    //     .then(top5weekList => settop5weekList(top5weekList))
    //     .catch(error => {
    //         console.log(error)
    //     })
    // }, [])
    // console.log(top5weekList)


    return(
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel>
            <img
            src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
            alt="..."
            />
            <img
            src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
            alt="..."
            />
            <img
            src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
            alt="..."
            />
            <img
            src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
            alt="..."
            />
            <img
            src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
            alt="..."
            />
        </Carousel>
    </div>
    )
}

export default CarouselComponent;