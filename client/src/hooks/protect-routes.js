import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ProtectRoutes = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (token === null) {
      navigate("/");
    }
  }, []);
};

export default ProtectRoutes;
