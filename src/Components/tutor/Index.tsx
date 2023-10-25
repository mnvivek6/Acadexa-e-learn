import React, { useEffect, useState } from 'react'
import Courses from './dashboardComponents/Courses';
import Users from './dashboardComponents/Users';
import MonthlySale from './dashboardComponents/MonthlySale';
import Revenue from './dashboardComponents/Revenue';
import Piechart from './dashboardComponents/Piechart';
import Barchart from './dashboardComponents/Barchart';
import { Allcourse } from '../../Services/tutor/Addcourse';
import { Course, Payment } from '../../Models/Models';
import { Totalrevenue } from '../../Services/tutor/Getcourse';



const Index:React.FC=()=> {

const [courses, setCourses] = useState<Course[] | null>(null);
const [payment, setPayment] = useState<Payment[] | null>(null);
const [amount, setAmount] = useState<number[] | undefined>(undefined);
const [total,setTotal] = useState<number|undefined>(0)
const [totalusers,setTotalusers] = useState<number|undefined>(0)

useEffect(() => {
  const fetchData = async () => {
    const responseCourses = await Allcourse();
    const responsePayments = await Totalrevenue();
    setCourses(responseCourses.message);
    setPayment(responsePayments);
    setTotalusers(responsePayments?.length)
    console.log('Length of the payment',responsePayments?.length);
  };

  fetchData();
}, []);

useEffect(() => {
  if (payment) {
    const amounts = payment.map((item) => parseFloat(item.amount) || 0);
    console.log(amounts);
    
    setAmount(amounts);
  }
}, [payment]);

useEffect(() => {
  if (amount) {
    const totalSum = amount.reduce((sum, item) => sum + item, 0);
    console.log(totalSum);
    setTotal(totalSum)
  }
}, [amount]);

   
     
    // payment?.map((amount)=>{
    //   return (console.log('total amount',amount))
    // })
    // useEffect(()=>{
    //   const Totalrevenue = async()=>{
    //     const response = await Totalrevenue()

    //     console.log(response,'total payment data is here');
        
    //   }
    //   Totalrevenue()
    // },[])


    const totalCourses= courses?.length as number
   
  return (
  
            <div className="p-4 w-full ml-52 mt-10 overflow-x-hidden">
            <div className="grid grid-cols-12 gap-4">
              <Courses totalcourses={totalCourses}/>
              <MonthlySale/>
              <Revenue total={total}/>
              <Users totalusers={totalusers}/>
            
            </div>
            <div className="flex">
         <div className="w-1/2 p-4">
            <Piechart totalCourse={totalCourses} totalusers={totalusers} revenue={total} />
          </div>
     <div className="w-1/2 p-4">
        <Barchart />
      </div>
    </div>
{/* <Tutortable/> */}
          </div>
    
  )
}

export default Index
