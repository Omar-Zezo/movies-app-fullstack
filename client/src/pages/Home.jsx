import Slider from "../components/Slider";
import SliderCards from "../components/SliderCards";
import Ask from "../components/Ask";
import Subscription from "../components/Subscription";
import useFetchMoviesData from '../hooks/fetch-movies-data'
import useGetLoggeduser from '../hooks/get-logged-user'

const Home = () => {
  const {popularList, topRatedList, upcomingList} = useFetchMoviesData()
  const loggeduser = useGetLoggeduser()

  return (
    <div className="landing">
      <Slider data={popularList.slice(8,11)} internal={false} userWishlist={loggeduser?.wishlist}/>
      <SliderCards title={"Upcoming Movies"} data={upcomingList} userWishlist={loggeduser?.wishlist}/>
      <SliderCards title={"Top Rated Movies"} data={topRatedList} userWishlist={loggeduser?.wishlist}/>
      <SliderCards title={"Popular Movies"} data={popularList} userWishlist={loggeduser?.wishlist}/>
      <Ask/>
      <Subscription/>
    </div>
  );
};

export default Home;
