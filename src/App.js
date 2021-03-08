import React from 'react';
import './App.css'
import Row from './Row';
import requests from './Requests';

// fetchUrl로 requests 에 있는 api 가져오기

function App() {
  return (
    <div className="App">
      <h1>Hey Clever Programmer! Let's build Netflix Clone Front-end today 🚀 </h1>
      <Row title="NETFLEX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
    </div>
  );
}



export default App;
