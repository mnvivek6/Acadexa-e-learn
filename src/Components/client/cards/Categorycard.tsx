import React from 'react'
import { CategoryType } from '../../../Models/Models'
import { Link } from 'react-router-dom'
import Categories from '../../../Pages/clients/Categories'


interface categorydata{
    category:CategoryType[]|undefined
}
const  Category:React.FC<categorydata>=({category})=> {

  

  return (
    <div>
      <section className="flex items-center h-full ">
<div className="w-full  flex justify-center  default-carosul py-3  pt-24">
{category?.map((categories) => (

    <div className="w-48 max-w-xs mx-2 bg-grey bg-opacity-20 border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 motion-safe:hover:scale-110 transition-[2s]">
      <a href="#">
        <div className="h-32">
         <Link to={`/coursebycategory/${categories._id}`}>
         <img
            className="w-full h-full rounded-t-lg object-cover" 
          src={categories.image}
            alt=""
          />
         </Link>
        </div>
      </a>
      <div className="p-3">
        <a href="#">
          <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white ">
          {categories.name}
          </h5>
        </a>
        <p className="mb-1 font-sans text-gray dark:text-white overflow ">
        <div className="line-clamp-1">
       {categories.description}
      </div>
     </p>  
      </div>
    </div>
   ))}
</div>
</section>
    </div>
  )
}

export default Category
