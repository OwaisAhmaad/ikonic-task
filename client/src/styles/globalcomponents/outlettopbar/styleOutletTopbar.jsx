import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";

export const OutLetTopbarContainer = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  background: "#FFFFFF",
  padding: "0px 10px",
  height: "80px",
  filter: "drop-shadow(0px 0px 10px rgba(80, 66, 152, 0.26))",
  "@media (max-width: 820px)": {
    padding: "0px 20px",
  },
  "@media (max-width: 540px)": {
    padding: "0px 10px",
  },
}));

export const OutLetTopbarLeftContainer = styled(Box)(() => ({
  width: "50%",
  display: "flex",
  flexDirection: "column",
}));

export const OutLetTopbarHeading = styled(Box)(() => ({
  display: "flex",
  fontFamily: "Roboto",
  fontWeight: 600,
  fontSize: "18px",
}));

export const OutLetTopbarSubHeading = styled(Box)(() => ({
  display: "flex",
  fontFamily: "Roboto",
  fontWeight: 400,
  fontSize: "14px",
  marginTop: "2px",
}));
export const OutLetTopbarRightContainer = styled(Box)(() => ({
  width: "50%",
  display: "flex",

  alignItems: "flex-end",
  justifyContent: "flex-end",
  marginRight: "15px",
}));
