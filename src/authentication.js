import React from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import NotFound from "./container/404NotFound";
import Accountability from "./container/Accountability";
import Document from "./container/Document";
import Add from "./container/Document/component/Board/Add";
import Edit from "./container/Document/component/Board/Edit";
import Setting from "./container/Setting";
import User from "./container/User";
import Layout from "./layout";
const Authentication = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Navigate to={"/user"} />} />
        <Route path="/user" element={<User />} />
        <Route path="/document" element={<Document />} />
        <Route path="/document/add" element={<Add />} />
        <Route path="/document/:id" element={<Edit />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/accountability" element={<Accountability />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Authentication;
