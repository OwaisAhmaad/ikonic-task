import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import {
  AddPostFormContainer,
  CustomTypography,
  CustomTextField,
  CustomTextArea,
  CustomButton,
} from "../../../styles/pagesstyling/posts/addpost/styleAddPost";
import { useEditPost } from "../../../customhooks/posthooks/useEditPost";
import { useParams } from "react-router-dom";
const EditPostForm = () => {
  const { id } = useParams();
  const { formData, handleChange, handleSubmit, isLoading, isSuccess } =
    useEditPost(id);

  if (isLoading) {
    return (
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "8vh",
        }}
      >
        <CircularProgress sx={{ color: "black" }} />
      </div>
    );
  }
  if (isSuccess) {
    return (
      <>
        <AddPostFormContainer>
          <CustomTypography variant="h5" gutterBottom>
            Add Post
          </CustomTypography>
          <form onSubmit={handleSubmit}>
            <CustomTextField
              name="title"
              placeholder="title"
              type="text"
              fullWidth
              value={formData.title}
              onChange={handleChange}
            />
            <CustomTextArea
              name="content"
              placeholder="Content"
              type="text"
              fullWidth
              value={formData.content}
              onChange={handleChange}
            />

            <CustomButton variant="contained" type="submit">
              Add Post
            </CustomButton>
          </form>
        </AddPostFormContainer>
      </>
    );
  }
};

export default EditPostForm;
