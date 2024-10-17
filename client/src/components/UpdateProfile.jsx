import { useContext, useEffect } from "react";
import { LoggedUserContext } from "../App";
import { Close } from "../images/svg";
import { useForm } from "react-hook-form";
import { updateLoggedUser } from "../store/users/loggeduserSlice";
import { useDispatch } from "react-redux";
import ChangePassword from "./ChangePassword";

const UpdateProfile = ({ updatePage, setUpdatePage }) => {
  const loggedUser = useContext(LoggedUserContext);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const token = localStorage.getItem("token");
  const dispatch = useDispatch()

  const onSubmit = (data) => dispatch(updateLoggedUser({token, data}));


  useEffect(() => {
    setValue("fullName", loggedUser?.fullName);
    setValue("phoneNumber", loggedUser?.phoneNumber);
  }, [loggedUser]);


  return (
    <div
      className={`${
        updatePage ? "flex" : "hidden"
      }  max-lg:flex-col xl:w-[80%] mx-auto w-full mt-16 rounded-md absolute left-[50%] translate-x-[-50%] top-9 z-50 bg-black`}
    >
      <div className="py-5 px-5 w-full min-h-[500px] xl:px-10">
        <h3 className="text-mainColor text-xl font-semibold flex items-center">
          Information
          <img
            className="ml-auto border border-white rounded-sm p-1 cursor-pointer"
            width={20}
            src={Close}
            alt="close"
            onClick={() => setUpdatePage(false)}
          />
        </h3>
        <form
          className="flex flex-col gap-4 mt-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex items-center">
            <label className="text-lg text-slate-100 font-semibold">
              Full Name:{" "}
            </label>
            <input
              className="p-2 bg-zinc-900 text-white ml-5"
              type="text"
              {...register("fullName", {
                required: "Name is required",
                minLength: {
                  value: 3,
                  message: "Full name must be more than 3 charactrs",
                },
              })}
            />
            <p className="text-red-600 ml-5">{errors.fullName?.message}</p>
          </div>
          <div className="flex items-center">
            <label className="text-lg text-slate-100 font-semibold">
              Phone Number:{" "}
            </label>
            <input
              className="p-2 bg-zinc-900 text-white ml-5"
              type="tel"
              {...register("phoneNumber", {
                required: "Phone number is required",
                pattern: {
                  value: /^01[0125][0-9]{8}$/gm,
                  message: "invalid phone number",
                },
              })}
            />
            <p className="text-red-600 ml-5">{errors.phoneNumber?.message}</p>
          </div>
          <input
            className="text-white bg-mainColor hover:bg-mainColor/90 duration-75 py-2 rounded-md cursor-pointer"
            type="submit"
            value={"Update"}
          />
        </form>
        <ChangePassword/>
      </div>
    </div>
  );
};

export default UpdateProfile;
