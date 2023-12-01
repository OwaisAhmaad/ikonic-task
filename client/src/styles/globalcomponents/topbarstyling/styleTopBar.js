import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";

export const AppbarContainer = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  background: "#FFFFFF",
  alignItems: "center",
  padding: "0px 10px",
  height: "60px",
  filter: "drop-shadow(0px 0px 10px rgba(80, 66, 152, 0.26))",
  "@media (max-width: 820px)": {
    padding: "0px 20px",
  },
  "@media (max-width: 540px)": {
    padding: "0px 10px",
    justifyContent: "space-between",
  },
}));

export const LeftContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  width: "140px",
  background: "black",
  alignItems: "center",
  justifyContent: "center",
  height: "40px",
  color: "white",
  fontFamily: "Roboto",
}));

export const RightContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0px 10px",
}));

export const InRightLeftContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0px 40px",
  gap: 10,
}));
