/* eslint-disable import/no-anonymous-default-export */
const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = 'https://api.themoviedb.org/3/';

const fetchMovies = async(endpoint) => {
    return await fetch(
        `${API_URL}${endpoint}?api_key=${API_KEY}&language=fr-FR`
    ).then((response) => response.json())
}

export default  {
    getHomesMovies: async() => {
        return  [
            {
                slug: "top-rated-movies",
                title: "Films les mieux notés",
                items: await fetchMovies("movie/top_rated"),
            },
            {
                slug: "popular-movies",
                title: "Films populaires",
                items: await fetchMovies("movie/popular"),
            },
            {
                slug: "upcoming",
                title: "Prochaines sorties film",
                items: await fetchMovies("movie/upcoming"),
            },
            {
                slug: "top-rated-shows",
                title: "Séries les mieux notés",
                items: await fetchMovies("tv/top_rated"),
            },
        ]
    },
}