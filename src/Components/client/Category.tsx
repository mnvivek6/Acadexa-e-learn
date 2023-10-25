import React ,{useEffect, useState }from 'react'
import Categorycard from './cards/Categorycard'
import { getCategory } from '../../Services/client/getCategory'
import { CategoryType } from '../../Models/Models'

function Category() {


  const [category,setCategory]= useState<CategoryType[]>()

    // const navigate = useNavigate()
    // const handleSignout=()=>{
    //     dispatch(logoutUser({}))
    //     navigate('/login')
    //   }
    useEffect(()=>{
      
        const categoriess = async()=>{
            try {
                const res  = await getCategory()

                console.log(res,' all categoriesare here');
                
                setCategory(res.Allcategory)

            } catch (error) {
                
            }
        }
        categoriess()
    },[])
    

  return (
    <>
    <Categorycard category={category}/>
    </>
  )
}
export default Category


