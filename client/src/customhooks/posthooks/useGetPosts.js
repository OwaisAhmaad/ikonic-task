import React from "react";
import { useGetPostDataQuery } from "../../features/postsfeatures/authPostsSlice";
import { useNavigate } from "react-router-dom";
export const useGetPosts = () => {
  const navigate = useNavigate();
  const { data, isSuccess, isLoading } = useGetPostDataQuery(
    {},
    {
      refetchOnMountOrArgChange: true,
    }
  );

  const transformedData = React.useMemo(() => {
    if (data && data.data && Array.isArray(data.data.data)) {
      return data?.data?.data.map((post) => ({
        id: post._id,
        title: post.title,
        content: post.content,
        user: post.user,
      }));
    }
    return [];
  }, [data]);

  const handleView = (id) => {
    navigate(`/view-post/${id}`);
  };

  const handleEdit = (id) => {
    navigate(`/edit-post/${id}`);
  };
  const handleAdd = () => {
    navigate(`/add-post`);
  };

  return {
    postData: transformedData,
    isLoading,
    isSuccess,
    handleView,
    handleEdit,
    handleAdd,
  };
};
