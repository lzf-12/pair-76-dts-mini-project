const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };


const allWeekTrend = async () => {
    // fetch menggunakan async await
    try{
        const data = await fetch('https://api.themoviedb.org/3/trending/all/week?api_key=046cd30b3f95a6fffc0a81069cc46091', requestOptions)
        const json = await data.json()
        const list20 = json.results
        const sorted = list20.sort((a,b) => b.vote_average - a.vote_average)
        const topweek5 = sorted.slice(0,5)

        return topweek5
    }
    catch(error) {
        console.log(error)
    }
}


const moviesWeekTrend = async () => {
    try{
        const data = await fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=046cd30b3f95a6fffc0a81069cc46091', requestOptions)
        const json = await data.json()
        const list20 = json.results

        return list20
    }
    catch(error) {
        console.log(error)
    }
}

const tvWeekTrend = async () => {
    try{
        const data = await fetch('https://api.themoviedb.org/3/trending/tv/week?api_key=046cd30b3f95a6fffc0a81069cc46091', requestOptions)
        const json = await data.json()
        const list20 = json.results

        return list20
    }
    catch(error) {
        console.log(error)
    }
}


const getGenreMovieList = async () => {
    try{
        const data = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=046cd30b3f95a6fffc0a81069cc46091&language=en-US', requestOptions)
        const json = await data.json()
        const list20 = json.genres

        return list20
    }
    catch(error) {
        console.log(error)
    }
}

const getGenreTvList = async () => {
    try{
        const data = await fetch('https://api.themoviedb.org/3/genre/tv/list?api_key=046cd30b3f95a6fffc0a81069cc46091&language=en-US', requestOptions)
        const json = await data.json()
        const list20 = json.genres

        return list20
    }
    catch(error) {
        console.log(error)
    }
}

export {allWeekTrend, moviesWeekTrend, tvWeekTrend, getGenreMovieList, getGenreTvList};
