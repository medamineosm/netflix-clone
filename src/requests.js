const API_KEY = "AIzaSyAhDK2pW0U686E62L6PpFSL2NLflvZhkBY";
const LANGUAGE = "en-US";

const requets = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=${LANGUAGE}`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=${LANGUAGE}`,
    fetchActionMovies: `discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `discover/movie?api_key=${API_KEY}&with_genres=99`
}

export default requets;