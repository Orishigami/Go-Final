import React, { useState } from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Radio,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function TeacherInsert() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    FirstName: "",
    LastName: "",
    Sex: "",
    Age: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeRadio = (e) => {
    setData({
      ...data,
      Sex: e.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/teachers", {
        FirstName: data.FirstName,
        LastName: data.LastName,
        Age: parseInt(data.Age),
        Sex: data.Sex,
      });
      console.log(data);
      if (response.status === 200) {
        // Handle success (e.g., store token, redirect, update state)
        navigate("/teachers"); // Redirect to the home page
        // Redirect or update state here
      } else {
        throw new Error(`HTTP Error: ${response.status}`);
      }
    } catch (error) {
      if (error.response && error.response.data) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error("Login error:", error.response.data.message);
        // Display error message to the user
      } else if (error.request) {
        // The request was made but no response was received
        console.error("No response received:", error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error:", error.message);
      }
    }
  };

  return (
    <>
      <div className="flex justify-center items-center">
        <Card color="transparent" shadow={false}>
          <Typography variant="h4" color="blue-gray">
            เพิ่มข้อมูลคุณครู
          </Typography>
          <form
            onSubmit={handleSubmit}
            className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          >
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                ชื่อ
              </Typography>
              <Input
                size="lg"
                name="FirstName"
                value={data.FirstName}
                placeholder=""
                onChange={handleChange}
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                นามสกุล
              </Typography>
              <Input
                size="lg"
                name="LastName"
                value={data.LastName}
                placeholder=""
                onChange={handleChange}
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                อายุ
              </Typography>
              <Input
                size="lg"
                type="number"
                name="Age"
                value={data.Age}
                placeholder=""
                onChange={handleChange}
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                เพศ
              </Typography>
              <div className="relative h-11 min-w-[200px] w-1/2">
                <div className="flex gap-10">
                  <Radio
                    name="sex"
                    value="ชาย"
                    label="ชาย"
                    onChange={handleChangeRadio}
                  />
                  <Radio
                    name="sex"
                    value="หญิง"
                    label="หญิง"
                    onChange={handleChangeRadio}
                    defaultChecked
                  />
                </div>
              </div>
            </div>
            <Button type="submit" className="mt-6" fullWidth>
              เพิ่ม
            </Button>
          </form>
        </Card>
      </div>
    </>
  );
}

export default TeacherInsert;
