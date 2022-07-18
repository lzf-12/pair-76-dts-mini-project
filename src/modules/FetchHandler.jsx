const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };


const allWeekTrend = async () => {
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
    

    // return fetch('https://api.themoviedb.org/3/trending/all/week?api_key=046cd30b3f95a6fffc0a81069cc46091', requestOptions)
    // .then(response => response.json())
    // .then(result => {
    //     const list20 = result.results
    //     const sorted = list20.sort((a,b) => b.vote_average - a.vote_average)
    //     const topweek5 = sorted.slice(0,5)
    //     return topweek5
    // })
    // .catch(error => console.log('error', error));
}


// const moviesWeekTrend = () => {
//     return fetch('api.themoviedb.org/3/trending/movies/week?api_key=046cd30b3f95a6fffc0a81069cc46091')
//     .then(response => response.json())
//     .then(data2 => console.log(data2));
    
// }

// const tvWeekTrend = () => {
//     return fetch('api.themoviedb.org/3/trending/tv/week?api_key=046cd30b3f95a6fffc0a81069cc46091')
//     .then(response => response.json())
//     .then(data3 => console.log(data3));
    
// }

export {allWeekTrend};
