import React from "react";
import EditPostForm from "../../../../components/posts/editpostform/EditPostForm";
import OutLetTopBar from "../../../../components/globalcomponents/outlettopbar/OutLetTopBar";

const EditPost = () => {
  return (
    <div style={{ width: "100%" }}>
      <div style={{ margin: "30px" }}>
        <OutLetTopBar
          heading="Edit Post"
          subheading="You can Update your post from here "
          addDetail=""
        />
      </div>
      <EditPostForm />
    </div>
  );
};

export default EditPost;
