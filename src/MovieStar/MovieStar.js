import React,{useEffect, useState} from 'react'
import CancleIcon from '@material-ui/icons/Cancel'
import movieTrailer from 'movie-trailer';
import './MovieStar.css';
 
const MovieStar = ({backdrop_path,title,overview,name,release_date,first_air_data,setModalVisibility}) => {
    const base_url = "https://image.tmdb.org/t/p/original/";
    const [trailerUrl, setTrailerUrl] = useState(true);
 
    useEffect(()=>{
        if(trailerUrl){
            setTrailerUrl("")
        } else {
            movieTrailer(title || name || "")
            .then(url =>{
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v'));
            }).catch(error => console.log(error))
        }
 
    },[name, title, trailerUrl])


    return (
        <div className="presentation" role="presentation">
            <div className="wrapper-modal">
                <div className="modal">
                <span onClick={()=>setModalVisibility()} classNam="modal-close"><CancleIcon/></span>
                    { trailerUrl ? Image :
                         // eslint-disable-next-line jsx-a11y/alt-text
                         (<img
                            className="modal__poster-img"
                            src={`${base_url}${backdrop_path}`}
                        />)}
             
                </div>
            </div>
        </div>
    )
}

export default MovieStar
