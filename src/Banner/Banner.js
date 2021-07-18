/* eslint-disable jsx-a11y/heading-has-content */
import React, { useEffect, useState } from 'react'
import axios from '../Axios/axios';
import requests from '../Requests/Requests'
import './Banner.css';

// 상단 배너 추가 && 리로드시 영화 Change구현

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchActionMovies)
            setMovie(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length) // 랜덤 함수
                ]
            );
            return request
        }
        fetchData()
    }, []);

    console.log(movie);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 3) + " ..." : str;
    }

    return (
        <header className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(
                    "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                )`,
                backgroundPosition: "center right"
            }}
        >
            <div className="banner__contents">
                {/* title */}
                <h1 className="banner__title">
                    {movie?.title || movie?.name || movie?.original_title}
                </h1>
                {/* div > 2 buttons  play & myList*/}
                <div className="banner__buttons">
                    <button className="banner__button">감상하기</button>
                    <button className="banner__button">작품 추가</button>
                </div>

                <h1 className="banner__description">
                    {truncate(movie?.overview, 500)}
                </h1>
                {/* description */}
            </div>
            <div className="banner--fadeBottom" />
        </header>
    )
}

export default Banner
