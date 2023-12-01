import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { InputBase, Button, Typography } from "@mui/material";
export const AddPostFormContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "500px",
  margin: "auto",
  marginTop: "50px",
  padding: "20px",
  border: "1px solid #ccc",
  borderRadius: "5px",
  height: "60vh",

  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
}));

export const CustomTextField = styled(InputBase)(({ theme }) => ({
  width: "100%",
  marginBottom: "20px",
  "& .MuiInputBase-input": {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    backgroundColor: "#fff",
    fontFamily: "Roboto",
    fontSize: "16px",
    color: "#000",
    "&:focus": {
      borderColor: "#000",
      boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)",
    },
  },
}));

export const CustomTextArea = styled("textarea")(({ theme }) => ({
  width: "100%",
  marginBottom: "20px",
  padding: "10px",
  borderRadius: "5px",
  border: "1px solid #ccc",
  backgroundColor: "#fff",
  fontFamily: "Roboto",
  fontSize: "16px",
  color: "#000",
  "&:focus": {
    borderColor: "#000",
    boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)",
    outline: "none",
  },
}));

export const CustomButton = styled(Button)(({ theme }) => ({
  width: "100%",
  padding: "10px",
  borderRadius: "5px",
  backgroundColor: "#000",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#333",
  },
}));

export const CustomTypography = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  marginBottom: "20px",
}));
