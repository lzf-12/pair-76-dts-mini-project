import React, {useEffect, useReducer} from "react";
import { useParams } from "react-router-dom";
import { tvWeekTrend, moviesWeekTrend } from "../data/FetchHandler"



const showDetailinitialState = {
    showId:  '',
    allData: [],
    error: ''
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'GET_ID':
            return {
                showId:  action.id,
                allData: action.payload,
                error: ''
            }
        case 'GET_ERROR':
            return {
                showId:  '',
                allData: [],
                error: 'something is broke'
            }
        default:
            return state
    }
}

const MovieDetail = () => {

    const [state, dispatch] = useReducer(reducer,  showDetailinitialState )

    let params = useParams()

    useEffect(()=> {
        moviesWeekTrend()
        .then(response1 =>{
            return tvWeekTrend()
            .then(response2 => {
                dispatch( {type: 'GET_ID', payload: [...response1, ...response2], id: params.showId })
            })
        })
        
    }, [])

    let findObj = state.allData.find(obj => obj.id == params.showId)
    let showTitle = findObj?.name === undefined ? findObj?.title : findObj?.name
    let showBackdrop = findObj?.backdrop_path !== undefined ? findObj?.backdrop_path : console.log('path error')
    let showDesc = findObj?.overview !== undefined ? findObj?.overview : console.log('path error')
    let mediaType = findObj?.media_type !== undefined ? findObj?.media_type : console.log('path error')
    let showLang = findObj?.original_language !== undefined ? findObj?.original_language : console.log('path error')
    let voteAverage = findObj?.vote_average !== undefined ? findObj?.vote_average : console.log('path error')

    console.log(state)  
    console.log(findObj?.name === undefined ? findObj?.title : findObj?.name)



    return (
        <>
            {/* <p className="text-white">id is {params.showId} </p> */}
            <p className="text-white text-5xl">{showTitle}</p>
            <div className="text-white mt-2">
                <span className=" uppercase">{mediaType} &#8226; </span>
                <span className=" uppercase">{showLang} &#8226; </span>
                <span className="">{voteAverage}</span>
            </div>
            <div className="flex ">
                    <div className="flex flex-2 flex-col items-center">
                        <p className="text-white p-8">{showDesc}</p>
                        <button className="bg-black text-white border-white border-2 w-36 z-10 p-3">Watch Show</button>
                    </div>
                    <div className="flex-auto flex-1 basis-5/12">
                        <img alt={showTitle} src={"https://image.tmdb.org/t/p/w500/" + showBackdrop} />
                    </div>

            </div>
            
        </>
    )
}

export default MovieDetail;