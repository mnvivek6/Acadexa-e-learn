import React from 'react'
import { Payment } from '../../../Models/Models'
import { Link } from 'react-router-dom'

interface paymentItems{
    paymentItem:Payment
}
const Profilecoursecard:React.FC<paymentItems>=({paymentItem})=> {
  return (
    <div  className="bg-white rounded-lg shadow-md max-w-xs w-40 h-40 overflow-hidden ">
    <Link to={`/coursePlaylist/${paymentItem?.course?._id}`}>
    <img
      className="h-56 lg:h-20 w-full object-cover"
      src={paymentItem.course.image} // Assuming 'image' is the property containing the course image URL
      alt={paymentItem.course.title} // Assuming 'title' is the property containing the course title
    />
    </Link>
    <div className="p-3">
      <span className="text-sm text-primary">{paymentItem?.course?.title}</span>
      <p className="paragraph-normal text-gray-600 line-clamp-1">
        {paymentItem.course.description} {/* Display other course information */}
      </p>
    </div>
  </div>
  )
}

export default Profilecoursecard
