import logo from './logo.svg';
import './App.css';
import MainPage from '../components/MainPage/MainPage';
import NavBar from '../components/NavBar/NavBar';
import StatsNBA from '../components/StatsNBA/StatsNBA';
import GamesNBA from '../components/GamesNBA/GamesNBA';
import PlayersNBA from '../components/PlayersNBA/PlayersNBA';


function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" Component={MainPage}/> 
        <Route path="/players" Component={PlayersNBA}/> 
        <Route path="/games" Component={GamesNBA}/> 
        <Route path="/stats" Component={StatsNBA}/> 
      </Routes>
      


    </>
  );
}

export default App;
