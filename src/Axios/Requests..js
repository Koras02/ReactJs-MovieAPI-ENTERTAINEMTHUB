// Neflix Row 스타일링 API_Key 설정
const API_KEY = "7db8b1ffbba88aaa67068565d84fe99f";


// api Key를 requests하기
const requests = {
    fetchTrending: `/trending/today/week?api_key=${API_KEY}&language=ko-KR&region=KR&include_image_language=ko`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=218&language=ko-KR&region=KR&include_image_language=ko-KR`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=ko-KR&region=KR`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28&language=ko-KR&region=KR`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35&language=ko-KR&region=KR`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27&language=ko-KR&region=KR`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749&language=ko-KR&region=KR`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99&region=KR`,
    fetchWarMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10752&region=KR`,
    fetchPopular: `/discover/movie?api_key={${API_KEY}&with_generes=99&region=KR`
}


export default requests;