import React, {useEffect, useReducer } from "react";
import { moviesWeekTrend } from "../data/FetchHandler"
import { useNavigate } from "react-router-dom";
import { MOTWinitialState } from "../store/store";

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
const MovieOfTheWeek = () => {

    const [state, dispatch] = useReducer(reducer,  MOTWinitialState )

    const navigate = useNavigate()

    useEffect(()=> {
        moviesWeekTrend()
        .then(response => {
            dispatch({type: 'FETCH_SUCCESS', payload: response })
        })
        .catch(err=> {
            dispatch({type: 'FETCH_ERROR', error: err})
        })
    }, [])

    // console.log(state)


    return (
    <>
        <div className="m-5 text-white text-left text-3xl font-weight:700 z-0"><h2>Movie Of The Week</h2></div>
        <div className="relative flex flex-row flex-wrap z-0 gap-2">
            {state.post.map((item, index)=> (
                <div onClick={() => {
                    let path = `/showdetail=${item.id}`
                    navigate(path)
                    }} key={item.id} className="cursor-pointer w-40 min-w-40 max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <img className="rounded-t-lg" src={"https://image.tmdb.org/t/p/w500/" + item.poster_path} alt="" />
                        {/* <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" /> */}
                    <div className="p-1">
                            {item.title}
                            {/* <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</p> */}
                    </div>
                </div>
            ))}
        </div>
    </>
    )
}

export default MovieOfTheWeek;