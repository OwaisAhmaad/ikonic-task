import React from "react";
import { useLoginUserMutation } from "../../features/authfeatures/authApiSlice";
import { useDispatch } from "react-redux";
import { setUser } from "../../features/authfeatures/authSlice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
export const useLogin = () => {
  const [login] = useLoginUserMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(formData).unwrap();
      console.log(response);
      if (response.status === "success") {
        dispatch(setUser(response.data));
        localStorage.setItem("user", JSON.stringify(response.data));
        const token = response?.token;
        const role = response?.data?.user?.role;
        const name = response?.data?.user?.fullname;
        const userId = response?.data?.user?._id;

        localStorage.setItem("token", token);
        localStorage.setItem("role", role);
        localStorage.setItem("name", name);
        localStorage.setItem("userId", userId);

        switch (role) {
          case "admin":
            navigate("/");
            break;

          case "user":
            navigate("/user/");
            break;
          default:
            navigate("/login");
        }
      }
    } catch (error) {
      if (error.data) {
        toast.error(error.data.message);
      }
    }
  };

  return { formData, handleChange, handleSubmit };
};
