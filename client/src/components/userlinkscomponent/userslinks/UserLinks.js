import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../../../pages/dashboard/Dashboard";
import AddPost from "../../../pages/adminscenes/posts/addpost/AddPost";
import EditPost from "../../../pages/adminscenes/posts/editpost/EditPost";
import ManagePosts from "../../../pages/adminscenes/posts";

const UserLinks = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route exact path="/posts" element={<ManagePosts />} />
        <Route path="/add-post" element={<AddPost />} />
        <Route path="/edit-post" element={<EditPost />} />
        {/* <Route path="/users" element={<Users />} /> */}
      </Routes>
    </>
  );
};

export default UserLinks;
