
import React, { useState, useEffect } from "react";
import axios from "../Axios/axios";
import "./Row.css";
 
import YouTube from "react-youtube";
 

const baseImgUrl = "https://image.tmdb.org/t/p/original";


function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    // Options for react-youtube
    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    };

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    const handleClick = async (movie) => {
        if (trailerUrl) {
            setTrailerUrl("");
        } else {
            let trailerurl = await axios.get(
                `/movie/${movie.id}/videos?api_key=7db8b1ffbba88aaa67068565d84fe99f`
            );
            setTrailerUrl(trailerurl.data.results[0]?.key);
        }
    };

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row_posters">
                {movies.map(
                    (movie) =>
                        movie.backdrop_path !== null && (
                            <img
                                className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                                src={`${baseImgUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path
                                    }`}
                                alt={movie.name}
                                key={movie.id}
                                onClick={() => handleClick(movie)}
                                
                            />
                        )
                )}
            </div>
            <div className="row_youtube">
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}  className= "Youtube"/>}
            </div>
        </div>
    );
}

export default Row;