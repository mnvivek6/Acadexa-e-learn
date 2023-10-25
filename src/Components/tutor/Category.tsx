import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import { getcategories } from '../../Services/tutor/Getcourse'
import { CategoryType } from '../../Models/Models'
import Listcourse from './listitems/Listcourse'
import Categorycard from './listitems/Categorycard'

function Category() {

    const [categorys , setCategory] = useState<CategoryType[]|null>(null)
    useEffect(()=>{
        const allCategory = async()=>{
            try {
                const response = await getcategories()
                console.log(response,'all cataegories are here');
                
                setCategory(response)
            } catch (error) {
                
            }
        }
        allCategory()
    },[])

  return (
    <>
    <Sidebar/>
     <div className="flex flex-col justify-center gap-5">
     {categorys?.map((category, index) => (
     <Categorycard category={category} />
     ))}
     </div>
    </>
  )
}

export default Category
