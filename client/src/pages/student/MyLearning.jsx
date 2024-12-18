import CourseSkeleton from "@/components/CoureSkeleton";
import React from "react";
import Course from "./Course";
import MyLearningSkeleton from "@/components/MyLearningSkeleton";

const MyLearning = () => {
  const isLoading = false;
  const myLearningCourses = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="max-w-4xl mx-auto my-24 px-4 md:px-0">
      <h1 className="font-bold text-2xl mb-6">MyLearning</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading
          ? Array.from({ length: 3 }).map((_, index) => (
              <MyLearningSkeleton key={index} />
            ))
          : myLearningCourses.map((course, index) => <Course key={index} />)}
      </div>
    </div>
  );
};

export default MyLearning;
