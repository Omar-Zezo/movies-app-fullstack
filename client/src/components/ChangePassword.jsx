import { useForm } from "react-hook-form";
import { changePassword } from "../store/users/changePasswordSlice";
import { useDispatch } from "react-redux";

const ChangePassword = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const token = localStorage.getItem("token")
  const dispatch = useDispatch()
  const onSubmit = (data) => dispatch(changePassword({token, data}))


  return (
    <>
      <div className="w-full flex items-center mt-5">
        <h3 className="text-mainColor text-xl font-semibold my-5">
          Change Password
        </h3>
      </div>
      <form
        className="flex flex-col gap-4 mt-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex items-center">
          <label className="text-lg text-slate-100 font-semibold">
            Current Password:{" "}
          </label>
          <input
            className="p-2 bg-zinc-900 text-white ml-5"
            type="password"
            placeholder="Current password"
            {...register("currentPassword", {
              required: "Current password is required",
            })}
          />
          <p className="text-red-600 ml-5">{errors.currentPassword?.message}</p>
        </div>
        <div className="flex items-center">
          <label className="text-lg text-slate-100 font-semibold">
            New Password:{" "}
          </label>
          <input
            className="p-2 bg-zinc-900 text-white ml-5"
            type="password"
            placeholder="New Password"
            {...register("newPassword", {
              required: "New Password is required",
            })}
          />
          <p className="text-red-600 ml-5">{errors.newPassword?.message}</p>
        </div>
        <div className="flex items-center">
          <label className="text-lg text-slate-100 font-semibold">
            Confirm Password:{" "}
          </label>
          <input
            className="p-2 bg-zinc-900 text-white ml-5"
            type="password"
            placeholder="Confirm Password"
            {...register("confirmPassword", {
              required: "Confirm Password is required",
              validate: (val)=>{
                if(val !== watch("newPassword")){
                  return "password and password confirm don't match"
                }
              }
            })}
          />
          <p className="text-red-600 ml-5">{errors.confirmPassword?.message}</p>
        </div>
        <input
          className="text-white bg-mainColor hover:bg-mainColor/90 duration-75 py-2 rounded-md cursor-pointer"
          type="submit"
          value={"Change Password"}
        />
      </form>
    </>
  );
};

export default ChangePassword;
