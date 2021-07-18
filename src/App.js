import React from 'react';
import './App.css'
import Row from './Row/Row';
import requests from './Requests/Requests';
import Banner from './Banner/Banner';
import Nav from './Navigation/Nav';

// fetchUrl로 requests 에 있는 api 가져오기

function App() {
  return (
    <div className="app">
      <Nav />
      {/*  Navbar */}
      <Banner />
      {/* Banner  */}
      <Row
        title="넷플릭스 오리지널"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row
        title="지금 감상하세요"
        fetchUrl={requests.fetchTrending} />
        
      <Row
        title="인기순"
        fetchUrl={requests.fetchTopRated} />
      <Row
        title="액션 영화"
        fetchUrl={requests.fetchActionMovies} />
      <Row
        title="코미디 영화"
        fetchUrl={requests.fetchComedyMovies} />
      <Row
        title="호러 영화"
        fetchUrl={requests.fetchHorrorMovies} />
      <Row
        title="로맨스 영화"
        fetchUrl={requests.fetchRomanceMovies} />
      <Row
        title="다큐멘터리 영화"
        fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}



export default App;
