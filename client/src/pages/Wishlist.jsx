import { useContext } from "react";
import Card from "../components/Card";
import ProtectRoutes from "../hooks/protect-routes";
import { LoggedUserContext } from "../App";

const Wishlist = () => {
  const loggedUser = useContext(LoggedUserContext);
  ProtectRoutes();
  
  return (
    <div className="w-full pt-28 pb-10 max-xl:pb-[80px]">
      <div className="w-full h-full flex justify-center gap-3 flex-wrap">
        {loggedUser?.wishlist.map((data) => (
          <div key={data.id} className="w-[236px] h-[350px] rounded-sm">
            <Card data={data} wCard={true}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
