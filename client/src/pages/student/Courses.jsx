import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import Course from "./Course";
import CourseSkeleton from "@/components/CoureSkeleton";

const courses = [1, 2, 3, 4, 5, 6, 7, 8];

const Courses = () => {
  const isLoading = true;
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto p-6">
        <h2 className="font-bold text-3xl text-center mb-6">Our Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading
            ? Array.from({ length: 8 }).map((_, index) => (
                <CourseSkeleton key={index} />
              ))
            : courses.map((course, index) => <Course key={index} />)}
        </div>
      </div>
    </div>
  );
};

export default Courses;
