import { useContext } from "react";
import Card from "../components/Card";
import ProtectRoutes from "../hooks/protect-routes";
import { LoggedUserContext } from "../App";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const loggedUser = useContext(LoggedUserContext);
  ProtectRoutes();
  
  return (
    <div className="w-full pt-28 pb-10 max-xl:pb-[80px]">
      <div className="w-full h-full flex justify-center gap-3 flex-wrap">
        {
          loggedUser?.wishlist.length > 0 ? (
            loggedUser?.wishlist.map((data) => (
              <div key={data.id} className="w-[236px] h-[350px] rounded-sm">
                <Card data={data} wCard={true}/>
              </div>
            ))
          ):(
            <div className="flex flex-col gap-5 items-center">
              <p className="text-white font-medium">
              No Movies Added To Wishlist
              </p>
              <Link className="text-white font-medium flex items-center justify-center rounded-sm w-[120px]  h-10 bg-green-700" to={"/discover"}>Discover Now</Link>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default Wishlist;
