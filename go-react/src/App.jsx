import { useState } from "react";
import "./App.css";
import SignIn from "./component/Signin";
import StudentList from "./component/Student";
import StudentInsert from "./component/Student/StudentInsert";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import UserList from "./component/User";
import TeacherList from "./component/Teacher";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StudentList />} />
          <Route path="/StudentInsert" element={<StudentInsert />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/teachers" element={<TeacherList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
