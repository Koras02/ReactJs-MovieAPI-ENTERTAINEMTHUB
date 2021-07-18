// api axios 설정 하기
import axios from 'axios';

// instance API 생성 baseURL 로 기본 API 주소로 가져오기
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

// // https://api.themoviedb.org/3/foo_bar 에 있는 foo-bar 호출 
instance.get('/foo-bar');


export default instance;