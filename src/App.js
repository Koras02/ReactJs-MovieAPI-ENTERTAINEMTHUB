import React from 'react';
import './App.css'
import Row from './Row';
import requests from './Requests';

// fetchUrl로 requests 에 있는 api 가져오기

function App() {
  return (
    <div className="app">
      <h1>
        Hey Clever Programmer! Let's build Netflix Clone Front-end today 🚀
        </h1>
      <Row
        title="NETFLEX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row
        title="Trending Now"
        fetchUrl={requests.fetchTrending} />
      <Row
        title="Top Rated"
        fetchUrl={requests.fetchTopRated} />
      <Row
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies} />
      <Row
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies} />
      <Row
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies} />
      <Row
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies} />
      <Row
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}



export default App;
