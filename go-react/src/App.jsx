import { useState } from "react";
import "./App.css";
import SignIn from "./component/Signin";
import StudentList from "./component/Student";
import StudentInsert from "./component/Student/StudentInsert";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import UserList from "./component/User";
import TeacherList from "./component/Teacher";
import SubjectList from "./component/Subject";
import TeacherInsert from "./component/Teacher/Insert";
import SignUp from "./component/Signup";
import TeacherUpdate from "./component/Teacher/Update";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/Students" element={<StudentList />} />
          <Route path="/StudentInsert" element={<StudentInsert />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/teachers" element={<TeacherList />} />
          <Route path="/subjects" element={<SubjectList />} />
          <Route path="/teacherInsert" element={<TeacherInsert />} />
          <Route path="/TeacherUpdate" element={<TeacherUpdate />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
