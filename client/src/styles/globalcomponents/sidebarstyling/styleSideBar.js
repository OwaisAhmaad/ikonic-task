import { NavLink } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";

export const Sidebar = styled(Box)(({ theme }) => ({
  width: "220px",
  backgroundColor: "black",
  color: "white",
  height: "90vh",
  paddingTop: "20px",
}));

export const UserInfo = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  backgroundColor: "black",
  color: "white",
  padding: "10px 20px 40px 20px",
  fontFamily: "Roboto",
}));

export const UserName = styled(Box)(() => ({
  fontWeight: 300,
  fontSize: "14px",
}));

export const UserEmail = styled(Box)(() => ({
  fontWeight: 300,
  fontSize: "12px",
}));
export const UserRole = styled(Box)(() => ({
  fontWeight: 300,
  fontSize: "10px",
}));

export const SidebarLink = styled(NavLink)(({ theme }) => ({
  display: "block",
  padding: "15px 20px",
  textDecoration: "none",
  color: "white",
  fontFamily: "Roboto",
  fontWeight: 300,
  fontSize: "14px",
  "&:hover": {
    backgroundColor: "rgba(255,255,255,0.1)",
  },
}));
