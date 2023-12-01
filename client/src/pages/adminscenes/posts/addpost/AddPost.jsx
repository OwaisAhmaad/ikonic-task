import React from "react";
import OutLetTopBar from "../../../../components/globalcomponents/outlettopbar/OutLetTopBar";
import PostForm from "../../../../components/posts/postform/PostForm";
const AddPost = () => {
  return (
    <div style={{ width: "100%" }}>
      <div style={{ margin: "30px" }}>
        <OutLetTopBar
          heading="Add Post"
          subheading="You can add your post from here "
          addDetail=""
        />
      </div>
      <PostForm />
    </div>
  );
};

export default AddPost;
