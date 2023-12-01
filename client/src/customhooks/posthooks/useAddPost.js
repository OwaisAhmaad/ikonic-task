import React from "react";
import { useAddPostDataMutation } from "../../features/postsfeatures/authPostsSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserID } from "../../features/authfeatures/authSlice";
export const useAddPost = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.userId);
  React.useEffect(() => {
    const storedUserID = localStorage.getItem("userId");

    if (storedUserID) {
      dispatch(getUserID(storedUserID));
    }
  }, [dispatch]);
  const [adddata] = useAddPostDataMutation();
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    title: "",
    content: "",
    user: user,
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
    const { title, content, user } = formData;

    try {
      if (!title || !content) {
        toast.error("Title and Content are required");
        return;
      }

      const response = await adddata({
        title: title,
        content: content,
        user: user,
      });
      if (response.data.status === "success") {
        toast.success("Post Added Successfully");
        setFormData({
          title: "",
          content: "",
        });
        navigate("/posts");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return { formData, handleChange, handleSubmit };
};
