import React, { useState } from 'react';

import { CategoryType, Course } from '../../../Models/Models';
import Editcategor from '../modal/Editcategor';


interface ListcourseProps {
  course?: Course;
  category?: CategoryType;
}

const Listcourse: React.FC<ListcourseProps> = ({ course, category }) => {


  const [showModal,setShowModal] = useState<boolean>(false)
        console.log(showModal);
        
  return (
    <div
      className="relative h-52 gap-1 flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white"
    >
      <div className="w-full md:w-1/3 bg-white grid place-items-center">
        {course && (
          
            <img src={course.image} alt={course.title} className="rounded-xl h-28" />
          
        )}
        {category && (
         
            <img src={category.image} alt={category.name} className="rounded-xl h-28" />
         
        )}
      </div>
      <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
        {/* Render either course or category details based on condition */}
        {course ? (
          <>
            <h3 className="font-black text-gray-800 md:text-lg text-sm">{course.title}</h3>
            <p className="md:text-sm text-gray-500 text-base line-clamp-3">{course.description}</p>

          </>
        ) : category ? (
          <>
            {/* Render category details here */}
            <h3 className="font-black text-gray-800 md:text-lg text-sm">{category.name}</h3>
            {/* Render other category details */}
            <p className="md:text-sm text-gray-500 text-base line-clamp-3">{category.description}</p>
            {showModal ? (
     <Editcategor showModal={showModal} setShowModal={setShowModal} categoryname={category.name} categorydescription={category.description} categoryimage={category.image} categoryid={category._id}/>
           ) : (
           <button
    type="button"
    className="focus:outline-none text-white bg-purple hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
    onClick={() => setShowModal(true)} // Use onClick instead of onChange
  >
    Edit
  </button>
)}      
          </>
          
        ) : null}
      </div>
    </div>
  );
};

export default Listcourse;
