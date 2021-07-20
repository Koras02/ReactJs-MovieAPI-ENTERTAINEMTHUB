 
import Banner from './Banner/Banner';
import Nav from './Navigation/Nav';
import Home from './pages/Home/Home';
import './App.css'
 
// fetchUrl로 requests 에 있는 api 가져오기

export default function App() {
  return (
    <div className="app">
      <Nav />
      {/*  Navbar */}
      <Banner />
      {/* Banner  */}
       <Home/>
      
    </div>
  );
}



 