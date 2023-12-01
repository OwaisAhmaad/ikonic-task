import React from "react";
import {
  useEditPostDataMutation,
  useGetPostDataByIdQuery,
} from "../../features/postsfeatures/authPostsSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
export const useEditPost = (id) => {
  const [updateData, isSuccess] = useEditPostDataMutation();
  const { data: fetchedPostData, isLoading } = useGetPostDataByIdQuery(id);
  console.log(fetchedPostData);
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    title: "",
    content: "",
    user: "656756d0ea31cb9b18959302",
  });

  React.useEffect(() => {
    if (fetchedPostData) {
      setFormData({
        title: fetchedPostData?.data?.data?.title,
        content: fetchedPostData?.data?.data?.content,
      });
    }
  }, [fetchedPostData]);

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

      const response = await updateData({
        id,
        title: title,
        content: content,
        user: user,
      });
      if (response.data.status === "success") {
        toast.success("Post Updated Successfully");
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

  return { isSuccess, isLoading, formData, handleChange, handleSubmit };
};
