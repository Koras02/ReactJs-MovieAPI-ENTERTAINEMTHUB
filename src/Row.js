import React, { useState, useEffect } from 'react'
import axios from './axios';
import "./Row.css"

const base_url = "https://image.tmdb.org/t/p/original/"  // 기본 original 주소 가져오기

// 레이아웃 Row 작성
function Row({ title, fetchUrl }) {
    const [movies, setMovies] = useState([]);

    //  snippet 사용
    useEffect(() => {
        // Tranding Now 부분에 Row 박스 넣기위한 Effect 선언
        // if [], run once when the row loads, and dont run again 안에 항목이 들어가면 적용 아니면 다시 체크
        async function fetchData() {
            const request = await axios.get(fetchUrl); // request 로 fetchUrl 
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    console.table(movies); // console로 영화 목록 이미지 띄우기

    return (
        <div className="row">
            {/* Title 부분 */}
            <h2>{title}</h2>
            {/* Container 부분 */}
            <div className="row__posters">
                {/* row 포스터 */}
                {movies.map(movie => (
                    // eslint-disable-next-line no-undef
                    <img
                        className="row_poster"
                        src={`${base_url}${movie.poster_path}`}
                        alt={movie.name} />  // 이미지 제목 map함수로 불러온다.
                ))}
            </div>
        </div>
    )
}

export default Row
