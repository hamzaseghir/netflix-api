const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = 'https://api.themoviedb.org/3/';

const fetchMovies = async(endpoint) => {
    return await fetch(
        `${API_URL}${endpoint}?api_key=${API_KEY}&language=fr-FR`
    ).then((response) => response.json())
}

export default {
    getHomesMovies: async() => {
        return  [
            {
                slug: "top-rated",
                title: "Mieux notés",
                items: await fetchMovies("movie/top_rated"),
            },
            {
                slug: "popular",
                title: "Populaires",
                items: await fetchMovies("movie/popular"),
            },
            {
                slug: "latest",
                title: "Dernières sorties",
                items: await fetchMovies("movie/latest"),
            },
            {
                slug: "upcoming",
                title: "Prochaines sorties",
                items: await fetchMovies("movie/upcoming"),
            }
        ]
    }
}