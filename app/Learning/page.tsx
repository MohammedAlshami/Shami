"use client";
import React, { useState } from "react";

// Updated courses data structure to include sub-lessons
const courses = [
  {
    category: "Machine Learning",
    items: [
      {
        title: "Fundamentals of Machine Learning",
        subLessons: ["Introduction to ML", "Supervised Learning"],
      },
      {
        title: "How to build a classification system",
        subLessons: ["Data Preprocessing", "Model Selection"],
      },
      {
        title: "Building a semantic segmentation model",
        subLessons: ["Understanding Segmentation", "Model Training"],
      },
    ],
  },
  {
    category: "Presentation",
    items: [
      {
        title: "Fundamentals of Presentation Skills",
        subLessons: ["Planning a Presentation", "Engaging Your Audience"],
      },
      {
        title: "How to build an effective slide deck",
        subLessons: ["Design Principles", "Content Structuring"],
      },
      {
        title: "Delivering with Confidence",
        subLessons: ["Overcoming Anxiety", "Body Language"],
      },
    ],
  },
  {
    category: "Business",
    items: [
      {
        title: "Fundamentals of Business Management",
        subLessons: ["Strategic Planning", "Resource Management"],
      },
      {
        title: "How to write a business plan",
        subLessons: ["Market Analysis", "Financial Projections"],
      },
      {
        title: "Effective Team Management",
        subLessons: ["Team Dynamics", "Conflict Resolution"],
      },
    ],
  },
  {
    category: "Accounting",
    items: [
      {
        title: "Fundamentals of Accounting",
        subLessons: ["Basic Principles", "Financial Statements"],
      },
      {
        title: "How to prepare taxes",
        subLessons: ["Tax Forms", "Deductions and Credits"],
      },
      {
        title: "Understanding Financial Reports",
        subLessons: ["Balance Sheets", "Income Statements"],
      },
    ],
  },
];

const CourseCategory = ({ category, items }) => {
  const [expandedLessonIndex, setExpandedLessonIndex] = useState(null);
  const [selectedSubLessons, setSelectedSubLessons] = useState(
    Array(items.length)
      .fill(null)
      .map(() => Array(2).fill(false)) // Initialize based on the max number of sub-lessons
  );

  const toggleSubLessons = (index) => {
    setExpandedLessonIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleCheckboxChange = (lessonIndex, subLessonIndex) => {
    const newSelectedSubLessons = [...selectedSubLessons];
    newSelectedSubLessons[lessonIndex][subLessonIndex] =
      !newSelectedSubLessons[lessonIndex][subLessonIndex]; // Toggle the checkbox state
    setSelectedSubLessons(newSelectedSubLessons);
  };

  return (
    <div className="text-center hover:-translate-y-2 transition-transform duration-500 ease-in-out">
      <h2 className="font-bold text-2xl text-neutral-200 py-2">{category}</h2>
      <div className="bg-neutral-800/40 border border-2 border-neutral-800 rounded-lg p-4 py-6 flex flex-col gap-4">
        {items.map((item, index) => {
          const checkedCount = selectedSubLessons[index].filter(Boolean).length; // Count checked boxes
          const totalSubLessons = item.subLessons.length; // Get total sub-lessons for the current lesson
          return (
            <div
              key={index}
              className="text-left bg-neutral-800/40 border border-2 border-neutral-800 text-white rounded-lg py-6 hover:-translate-y-2 transition-transform duration-500 ease-in-out cursor-pointer px-4 flex flex-col gap-4"
            >
              <div
                className="flex justify-between items-center gap-12"
                onClick={() => toggleSubLessons(index)}
              >
                <div>{item.title}</div>
                <div className="bg-neutral-800 p-2 rounded-lg">
                  {checkedCount}/{totalSubLessons}
                </div>
              </div>
              {expandedLessonIndex === index && (
                <div className="flex flex-col gap-4 mt-2">
                  {item.subLessons.map((subLesson, subIndex) => (
                    <div
                      key={subIndex}
                      className="flex justify-between items-center p-4 bg-neutral-800 rounded-lg"
                    >
                      <div>{subLesson}</div>
                      <input
                        type="checkbox"
                        checked={selectedSubLessons[index][subIndex]} // Check if this sub-lesson is checked
                        onChange={() => handleCheckboxChange(index, subIndex)}
                        className="bg-neutral-500 size-4 rounded-xl"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Page = () => {
  return (
    <div className="grid grid-cols-3 mx-auto mx-24 gap-8 justify-center items-center h-screen mt-36">
      {courses.map((course, index) => (
        <CourseCategory
          key={index}
          category={course.category}
          items={course.items}
        />
      ))}
    </div>
  );
};

export default Page;
