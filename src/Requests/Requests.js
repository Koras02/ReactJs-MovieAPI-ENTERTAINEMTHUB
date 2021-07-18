// Neflix Row 스타일링 API_Key 설정
const API_KEY = "7db8b1ffbba88aaa67068565d84fe99f";


// api Key를 requests하기
const requests = {
    fetchTrending: `/trending/today/week?api_key=${API_KEY}&language=ko-KR`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=218&language=ko-KR`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=ko_KR`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}


export default requests;