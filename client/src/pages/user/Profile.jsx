import { Link } from "react-router-dom";
import { ProfileImg, ProfileBgImg } from "../../images/imgs";
import { Edit, EditImg, ImagePlus, Trash } from "../../images/svg";
import Card from "../../components/Card";
import ProtectRoutes from "../../hooks/protect-routes";
import { LoggedUserContext } from "../../App";
import { useContext, useState } from "react";

const Profile = ({removeFromList}) => {
  const [imgMenu, setImgMenu] = useState(false)
  ProtectRoutes();
  const loggedUser = useContext(LoggedUserContext);

  return (
    <div
      className="w-screen min-h-screen flex justify-center items-center"
      style={{
        background: `url('${ProfileBgImg}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      onClick={()=> setImgMenu(false)}
    >
      <div className="flex max-lg:flex-col xl:w-[80%] w-full mt-16 rounded-md bg-black/85">
        <div className="xl:w-[30%] w-full max-lg:h-[500px] bg-slate-900/30 rounded-tl-md rounded-bl-md flex justify-center items-center">
          <div className="flex flex-col items-center gap-5">
            <div className="w-full relative">
            <img
              className="rounded-full"
              width={120}
              height={120}
              src={ProfileImg}
              alt="profile"
            />
            <div className="absolute left-5 bottom-0 size-6 rounded-full cursor-pointer bg-mainColor p-1 flex items-center justify-center">
            <img width={25} src={EditImg} alt="edit-img" 
            onClick={(e)=>{
              setImgMenu(!imgMenu)
              e.stopPropagation()
            }}
            />
            </div>
            <div className={`absolute left-5 bottom-[-55px] rounded-md border ${imgMenu ? 'flex flex-col items-start gap-1': 'hidden'} border-white/50 w-[140px] px-2 py-1 bg-blue-950`}>
              <button className="relative w-full">
                <input type="file" id="img-uplod" className="absolute left-0 top-0 size-0"
                onChange={(e)=> console.log(e.target.value)}
                />
                <label htmlFor="img-uplod" className="w-full flex items-center gap-1 cursor-pointer">
                <img width={20} src={ImagePlus} alt="change-img"/>
                <p className="text-white text-sm">Upload Image</p>
                </label>
              </button>
              <button className="text-white text-sm flex items-center gap-1">
                <img width={20} src={Trash} alt="remove-img"/>
                Remove Image
              </button>
            </div>
            </div>
            <h4 className="text-white text-xl capitalize font-meduim">
              {loggedUser?.fullName}
            </h4>
            <div className="flex items-center">
              <span className="text-white text-lg font-medium">
                Joined {loggedUser?.createdAt.split('T')[0]}
              </span>
            </div>
            <img
              className="cursor-pointer"
              width={25}
              height={25}
              src={Edit}
              alt="edit"
            />
            <button
              className="text-white text-base px-3 py-1 bg-red-700 rounded-md font-medium cursor-pointer"
              onClick={() => {
                localStorage.removeItem("token");
                window.location = "/";
              }}
            >
              Logout
            </button>
          </div>
        </div>
        <div className="py-5 px-5 w-full min-h-[500px] xl:px-10">
          <h3 className="text-white text-xl font-semibold">Information</h3>
          <div className="flex flex-col gap-4 mt-5">
            <div className="flex items-center">
              <h5 className="text-xl text-slate-300 font-semibold">Email: </h5>
              <p className="text-white text-lg ml-3">{loggedUser?.email}</p>
            </div>
            <div className="flex items-center">
              <h5 className="text-xl text-slate-300 font-semibold">
                User ID:{" "}
              </h5>
              <p className="text-white text-lg ml-3">{loggedUser?._id}</p>
            </div>
          </div>
          <div className="w-full flex items-center mt-5">
            <h3 className="text-white text-xl font-semibold my-5">My List</h3>
            <Link
              className="text-mainColor inline-block ml-auto hover:underline"
              to={"/wishlist"}
            >
              See All
            </Link>
          </div>
          <div className="w-full flex items-center gap-4 max-lg:flex-col">
            {loggedUser ? (
              loggedUser.wishlist.length > 0 ? (
                loggedUser.wishlist.slice(0, 3).map((mov) => (
                  <div
                    key={mov.id}
                    className="xl:w-[195px] w-[90%] h-fit rounded-md"
                  >
                    <Card data={mov} wCard={true} removeFromList={removeFromList}/>
                  </div>
                ))
              ):(
                <p className="text-white font-medium">No Movies Added To Wishlist</p>
              ) 
            ) : (
              null
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
