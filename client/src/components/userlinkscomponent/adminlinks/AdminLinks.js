import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../../../pages/dashboard/Dashboard";
import ManagePosts from "../../../pages/adminscenes/posts";
import AddPost from "../../../pages/adminscenes/posts/addpost/AddPost";
import EditPost from "../../../pages/adminscenes/posts/editpost/EditPost";

const AdminLinks = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/posts" element={<ManagePosts />} />
        <Route path="/add-post" element={<AddPost />} />
        <Route path="/view-post/:id" element={"View Post"} />
        <Route path="/edit-post/:id" element={<EditPost />} />
        {/* <Route path="/users" element={<Users />} /> */}
      </Routes>
    </>
  );
};

export default AdminLinks;
