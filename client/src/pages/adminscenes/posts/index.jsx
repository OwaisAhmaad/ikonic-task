import React from "react";
import PostsTable from "../../../components/posts/poststable/PostTable";
import OutLetTopBar from "../../../components/globalcomponents/outlettopbar/OutLetTopBar";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { useGetPosts } from "../../../customhooks/posthooks/useGetPosts";
const ManagePosts = () => {
  const { handleAdd } = useGetPosts();
  return (
    <div style={{ width: "100%" }}>
      <div style={{ margin: "30px" }}>
        <OutLetTopBar
          heading="Manage Posts"
          subheading="You can manage all the given user posts"
          addDetail={
            <AddRoundedIcon sx={{ cursor: "pointer" }} onClick={handleAdd} />
          }
        />
      </div>
      <PostsTable />
    </div>
  );
};

export default ManagePosts;
