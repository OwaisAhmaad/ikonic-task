import React from "react";
import { useAddPost } from "../../../customhooks/posthooks/useAddPost";
import {
  AddPostFormContainer,
  CustomTypography,
  CustomTextField,
  CustomTextArea,
  CustomButton,
} from "../../../styles/pagesstyling/posts/addpost/styleAddPost";

const PostForm = () => {
  const { formData, handleChange, handleSubmit } = useAddPost();
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
};

export default PostForm;
