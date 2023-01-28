import './Home.css';
import Header from "../../components/Header"
import Wallpaper from '../../components/Wallpaper';

function Home() {
  return (
    <div className="App">
      <div>
        <div className='absolute w-full z-50'>
         <Header />
        </div>
        <Wallpaper />
      </div>
      <div>
        Net screen
      </div>
    </div>
  );
}

export default Home;
