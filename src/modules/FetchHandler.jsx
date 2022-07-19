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

        return await topweek5
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

        return await list20
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

        return await list20
    }
    catch(error) {
        console.log(error)
    }
}

export {allWeekTrend, moviesWeekTrend, tvWeekTrend};
