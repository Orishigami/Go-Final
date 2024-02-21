import { useState } from "react";
import "./App.css";
import SignIn from "./component/Signin";
import StudentList from "./component/Student";

function App() {
  return (
    <>
      <SignIn />
      <StudentList />
    </>
  );
}

export default App;
