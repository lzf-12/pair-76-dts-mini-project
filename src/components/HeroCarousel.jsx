import React, {useEffect, useReducer} from "react";
import{ Carousel} from "flowbite-react/"
import { allWeekTrend } from "../data/FetchHandler"
// import { useNavigate } from "react-router-dom";

const initialState = {
    loading:true,
    error: '',
    post: []
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                post: action.payload,
                error: ''
            }
        case 'FETCH_ERROR':
            return {
                loading: false,
                post: action.payload,
                error: ''
            }
        default:
            return state
    }
}

const HeroCarousel = () => {

    const [state, dispatch] = useReducer(reducer,  initialState )
    // const navigate = useNavigate()

    useEffect(()=> {
        allWeekTrend()
        .then(response => {
            dispatch({type: 'FETCH_SUCCESS', payload: response })
        })
        .catch(err=> {
            dispatch({type: 'FETCH_ERROR', error: err})
        })
    }, [])


    return (
        <>
            <div className="w-100 h-56 sm:h-64 xl:h-80 2xl:h-96 z-0">
                <Carousel slide={false} className="" >
                {state.post.map((item, index) => (
                    <div key={item.id} className="flex h-full relative overflow-hidden bg-black">
                        <div className="bg-black flex-auto w-fit z-50">
                            <div className="text-white mt-7 text-4xl ">
                                <span className="uppercase">
                                    {(item.hasOwnProperty('name')) ? item.name : item.title }
                                </span>
                            </div>
                            <div className="flex justify-center gap-x-1 text-gray-500 mt-4 text-base">
                                <span className="uppercase">
                                    {item.media_type }
                                </span>
                                <span className="uppercase">
                                    &#8226; {item.original_language } &#8226;
                                </span>
                                <span>
                                    Drama
                                    {/* {top5weekList[1].name } */}
                                </span>
                            </div>
                            <div className="text-gray-500 mx-20 mt-4 text-left text-sm">
                                <p className="">
                                {item.overview }
                                </p>
                            </div>
                        </div>
                        
                        <img className="flex-none w-2/5 object-contain md:object-scale-down bg-black shadow-[inset_0_2px_4px_0px_rgba(0,0,0,0.3)]"
                        src={"https://image.tmdb.org/t/p/w500/" + item.backdrop_path }
                        // src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                        alt="..."
                        />
                    </div>
                ))}
                
                </Carousel>
            </div>
        </>
    )
}

export default HeroCarousel;