import React from "react";
import {
  CustomButton,
  CustomTextField,
  CustomTypography,
  LoginFormContainer,
} from "../../../styles/pagesstyling/authentication/login/styleLogin";
import { useLogin } from "../../../customhooks/authhooks/useLogin";

const Login = () => {
  const { formData, handleChange, handleSubmit } = useLogin();
  return (
    <LoginFormContainer>
      <CustomTypography variant="h5" gutterBottom>
        Login
      </CustomTypography>
      <form onSubmit={handleSubmit}>
        <CustomTextField
          name="email"
          placeholder="Email"
          type="email"
          fullWidth
          value={formData.email}
          onChange={handleChange}
        />
        <CustomTextField
          name="password"
          placeholder="Password"
          type="password"
          fullWidth
          value={formData.password}
          onChange={handleChange}
        />
        <CustomButton variant="contained" type="submit">
          Login
        </CustomButton>
      </form>
    </LoginFormContainer>
  );
};

export default Login;
