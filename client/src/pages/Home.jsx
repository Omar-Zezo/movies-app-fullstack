import Slider from "../components/Slider";
import SliderCards from "../components/SliderCards";
import Ask from "../components/Ask";
import Subscription from "../components/Subscription";
import useFetchMoviesHome from '../hooks/fetch-movies-home'

const Home = () => {
const {popularList, topRatedList, upcomingList} = useFetchMoviesHome()
  
  return (
    <div className="landing">
      <Slider data={popularList.slice(2,5)} />
      <SliderCards title={"Upcoming Movies"} moviesList={upcomingList} />
      <SliderCards title={"Top Rated Movies"} moviesList={topRatedList} />
      <SliderCards title={"Popular Movies"} moviesList={popularList} />
      <Ask/>
      <Subscription/>
    </div>
  );
};

export default Home;
