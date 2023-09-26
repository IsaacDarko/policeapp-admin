import { styles, layout } from "../style";
import HomeNav from "../components/home/HomeNav";
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import Footer from '../components/home/Footer';

const Home = () => {
  return (
    <div>
      
      <div className={``} >
        <HomeNav />
        <div className=''>
          <Hero />
        </div>
      </div>
      <div>
        <div>
          <Features />
        </div>
      </div>
      <div>
        <div>
          <Footer />
        </div>
      </div>
      
    </div>
  )
}

export default Home