import React from "react";
import {
  Sidebar,
  SidebarLink,
  UserInfo,
  UserRole,
} from "../../../styles/globalcomponents/sidebarstyling/styleSideBar";
import { getName, getRole } from "../../../features/authfeatures/authSlice";
import { useSelector, useDispatch } from "react-redux";
const SideBar = () => {
  const dispatch = useDispatch();

  const role = useSelector((state) => state.auth.role);
  const name = useSelector((state) => state.auth.name);

  React.useEffect(() => {
    const storedRole = localStorage.getItem("role");
    const storedName = localStorage.getItem("name");

    if (storedRole) {
      dispatch(getRole(storedRole));
    }
    if (storedName) {
      dispatch(getName(storedName));
    }
  }, [dispatch]);

  return (
    <Sidebar>
      <UserInfo>
        Welcome {name}
        <UserRole>Role : {role}</UserRole>
      </UserInfo>

      {role === "user" && (
        <>
          <SidebarLink to="/user/">Dashboard</SidebarLink>
          <SidebarLink to="/posts"> Posts</SidebarLink>
        </>
      )}
      {role === "admin" && (
        <>
          <SidebarLink to="/">Dashboard</SidebarLink>
          <SidebarLink to="/posts">Posts</SidebarLink>
          <SidebarLink to="/users">Users</SidebarLink>
          <SidebarLink to="/admins">Admins</SidebarLink>
        </>
      )}
    </Sidebar>
  );
};

export default SideBar;
