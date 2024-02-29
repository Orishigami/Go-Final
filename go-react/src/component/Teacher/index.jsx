import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { PencilIcon, TrashIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  CardFooter,
  Tabs,
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import TeacherUpdate from "./Update";
import TeacherDelete from "./Delete";

function TeacherList() {
  const [teachers, setTeachers] = useState([]);

  const fetchTeachers = async () => {
    try {
      // ทำการเรียก API ด้วย fetch ที่มี URL เป็น "http://localhost:5000/teachers"
      const response = await fetch("http://localhost:5000/teachers");

      // ตรวจสอบว่าการเรียก API สำเร็จหรือไม่
      if (!response.ok) {
        throw new Error(`HTTP error! status :${response.status}`);
      }

      // แปลงข้อมูลที่ได้เป็น JSON และกำหนดให้เป็นสถานะของ teachers
      const data = await response.json();
      setTeachers(data); // Update the state with the fetched teachers data into the teachers array
    } catch (error) {
      // จัดการข้อผิดพลาดที่เกิดขึ้น และกำหนดให้เป็นสถานะของ error
      setError(error.message);
    } finally {
      // ตั้งค่าสถานะ isLoading เป็น false เมื่อกระบวนการดึงข้อมูลเสร็จสิ้น
      // setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchTeachers();
  }, []);

  return (
    <>
      <Card className="h-full w-full">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-8 flex items-center justify-between gap-8">
            <div>
              <Typography variant="h5" color="blue-gray">
                รายชื่อคุณครู
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                See information about all members
              </Typography>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <NavLink to="/teacherinsert">
                <Button className="flex items-center gap-3" size="sm">
                  <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> เพิ่ม
                </Button>
              </NavLink>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            {/* <Tabs value="all" className="w-full md:w-max"></Tabs> */}
            <div className="w-full md:w-72">
              <Input
                label="Search"
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              />
            </div>
          </div>
        </CardHeader>
        <CardBody className="overflow-scroll px-0">
          <table className="mt-4 w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    ชื่อ
                  </Typography>
                </th>
                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    นามสกุล
                  </Typography>
                </th>
                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    อายุ
                  </Typography>
                </th>
                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    เพศ
                  </Typography>
                </th>
                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    ...
                  </Typography>
                </th>
              </tr>
            </thead>
            <tbody>
              {teachers.map((teacher) => (
                <tr key={teacher.ID}>
                  <td className="p-4">
                    <div className="flex flex-col">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {teacher.FirstName}
                      </Typography>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex flex-col">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {teacher.LastName}
                      </Typography>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex flex-col">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {teacher.Sex}
                      </Typography>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex flex-col">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {teacher.Age}
                      </Typography>
                    </div>
                  </td>
                  <td className="p-4">
                    <Tooltip content="Edit User">
                      <TeacherUpdate teacher={teacher} />
                    </Tooltip>
                    <Tooltip>
                      <TeacherDelete teacher={teacher} />
                    </Tooltip>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardBody>
        <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
          <Typography variant="small" color="blue-gray" className="font-normal">
            Page 1 of 10
          </Typography>
          <div className="flex gap-2">
            <Button variant="outlined" size="sm">
              Previous
            </Button>
            <Button variant="outlined" size="sm">
              Next
            </Button>
          </div>
        </CardFooter>
      </Card>
    </>
  );
}

export default TeacherList;
