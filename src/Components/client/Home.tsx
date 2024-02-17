import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../Redux/hooks';
import { motion, useScroll } from "framer-motion"
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom'
import { CategoryType } from '../../Models/Models';
import { getCategory } from '../../Services/client/getCategory';



function LandingPage() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const user = useAppSelector(state => state.user)

    const [Category,setCategory] = useState<CategoryType[]>()
    
    
    console.log(Category,'all category');
    

    useEffect(()=>{
    const allcategory = async()=>{

      try {
        
       const category  = await getCategory()
       console.log(category,'all categoryss are here');

       setCategory( category?.Allcategory)  
       
      } catch (error) {
        
      }
    }
    allcategory()
    },[])

    return (
       
        <div className=''>
            <nav className="fixed top-0 left-0 w-full h-20  bg-deepblue border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 z-50">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <a href="#" className="flex items-center">
                        {/* <img src="/stitchyLogo.png" className="mr-3 h-6 sm:h-10" alt="App Logo" /> */}
                        <svg className="w-6 h-6 text-gray-800 dark:text-lavender" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 17 20">
    <path d="M7.958 19.393a7.7 7.7 0 0 1-6.715-3.439c-2.868-4.832 0-9.376.944-10.654l.091-.122a3.286 3.286 0 0 0 .765-3.288A1 1 0 0 1 4.6.8c.133.1.313.212.525.347A10.451 10.451 0 0 1 10.6 9.3c.5-1.06.772-2.213.8-3.385a1 1 0 0 1 1.592-.758c1.636 1.205 4.638 6.081 2.019 10.441a8.177 8.177 0 0 1-7.053 3.795Z"/>
  </svg>
  <a href="" className='font-extrabold text-white'>ACADEXA</a>
       
                    </a>
                    <div className="flex items-center lg:order-2">{user?.accessToken ? (
                        <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600" onClick={() => {
                            //                 // dispatch(logoutUser({}))
                            //                 // navigate('/login')
                            navigate('/profile')

                        }}>
                            <i className='fa fa-user'></i>
                            {/* <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg> */}

                        </div>


                    ) : (<div>

                        <button className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"><Link to={'/login'}>Login</Link></button>
                    </div>)
                    }

                        {/* <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Get started</a> */}
                        <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                            <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <a href="#" className="block py-2 pr-4 pl-3 text-white rounded bg-blue-700 lg:bg-transparent lg:text-blue-700 lg:p-0 dark:text-white" aria-current="page">Home</a>
                            </li>
                            <li>
                                {/* <a href="#" className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400  lg:dark:hover:bg-transparent dark:border-gray-700">Chats</a> */}
                            </li>
                            <li>
                                {/* <a href="#" className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400  lg:dark:hover:bg-transparent dark:border-gray-700">Lives</a> */}
                            </li>
                            <li>
                                {/* <a href="#" className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400  lg:dark:hover:bg-transparent dark:border-gray-700">Teachers</a> */}
                            </li>
                            <li>
                                {/* <a href="#" className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400  lg:dark:hover:bg-transparent dark:border-gray-700">premium</a> */}
                            </li>
                            <li>
                                <a href="/login" className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400  lg:dark:hover:bg-transparent dark:border-gray-700">Login</a>
                            </li>
                          
                        </ul>
                    </div>
                </div>
            </nav>
           
            <section className="flex items-center h-screen" style={{ backgroundImage: 'url("https://fundfolio.gumlet.io/fundfolio/hero_bg.svg?w=1920&q=75")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="bg-transparent h-full flex justify-center items-center ml-4">
  <div className="max-w-sm justify-center bg-transparent border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
      <h5 className="mb-2 text-4xl font-poppins tracking-tight text-gray-900 dark:text-white">Learning that gets you</h5>
    </a>
    <p className="mb-3 font-poppins text-lightgray">Skills for your present (and your future). Get started with us. World's best platform to learn, affordable for everyone. Watch the best classes from the best tutors around the world.</p>
    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      Read more
      <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
      </svg>
    </a>
  </div>
</div>

</section>





{/* cards for classes */}


  
<section className="flex items-center h-full ">

<div className="w-full bg-deepblue flex justify-center h-full default-carosul py-3 pt-32 ">
  
  {Category?.map((categories) => (
    <div className="w-48 max-w-xs mx-2 bg-violet border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 motion-safe:hover:scale-110 transition-[2s]">
      <a href="#">
        <div className="h-32">
          <img
            className="w-full h-full rounded-t-lg object-cover" // Use object-cover for both width and height
            src={categories.image}
            alt=""
          />
        </div>
      </a>
      <div className="p-3">
        <a href="#">
          <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white ">
            {categories.name}
          </h5>
        </a>
        <p className="mb-2 font-normal text-lightgray  overflow h-20">
  <div className="line-clamp-3">
    {categories.description}
  </div>
  
</p>
        
      </div>
    </div>
  ))}
</div>

</section>






<section className="flex flex-col items-center h-screen bg-deepblue text-white">
  <h1 className="text-4xl font-extrabold mt-8 mb-4">Welcome to Our Technology Acquisitions Hub</h1>

  <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-10">
    <div className="w-full sm:w-1/2 bg-deepblue flex justify-center items-center transform motion-safe:hover:scale-110 transition-[2s]">
      <a href="#" className="block max-w-sm p-6 bg-violet border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div className="">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">24X7 ACCESS</h5>
          <p className="font-normal text-lightgray dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
          </p>
        </div>
      </a>
    </div>

    <div className="w-full sm:w-1/2 bg-deepblue flex justify-center items-center motion-safe:hover:scale-110 transition-[2s]">
      <a href="#" className="block max-w-sm p-6 bg-violet border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div className="">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">BEST STUDY MATERIALS</h5>
          <p className="font-normal text-lightgray dark:text-gray-400">We're dedicated to delivering the finest study materials, meticulously curated by experts, to propel your academic journey.
           Each piece of content is designed not just to inform but to transform, ensuring an unparalleled learning experience.Don't worry about your future remember your studies in our hand
          </p>
        </div>
      </a>
    </div>

    <div className="w-full sm:w-1/2 bg-deepblue flex justify-center items-center motion-safe:hover:scale-110 transition-[2s]">
      <a href="#" className="block max-w-sm p-6 bg-violet border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div className="">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">WORLDS BEST CERTIFICATES</h5>
          <p className="font-normal text-lightgray dark:text-gray-400">we pride ourselves on offering the world's best certificates, each a testament to your dedication and expertise.
           Our promise is simple yet profound: to provide you with certificates that not only recognize your achievements but also open doors to exciting opportunities travel around the world with this you will never get rejected</p>
        </div>
      </a>
    </div>
    


  </div>
  
</section>
<section className="flex items-center h-screen">
  <div className="w-1/2 bg-deepblue h-full flex justify-center items-center"> {/* Add "flex justify-center items-center" */}
    <div className="max-w-sm justify-center bg-deepblue  border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <h5 className="mb-2 text-4xl font-poppins tracking-tight text-gray-900 dark:text-white">START YOUR JOURNY FROM HERE</h5>
      </a>
      <p className="mb-3 font-poppins text-lightgray dark:text-gray-400">Skills for your present (and your future). Get started with us.Worlds best platform to learn. Affordable for everyone watch the best classess from best tutors around the world </p>
      <div className="inline-flex rounded-md shadow-sm" role="group">
  
 <a href="/signup">
 <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-violet border border-lavender rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
    <svg className="w-3 h-3 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z"/>
      <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/>
    </svg>
    JOIN AS STUDENT
  </button>
 </a>
  
</div>
    </div>
  </div><div className="w-1/2 bg-deepblue h-full flex justify-center items-center"> {/* Add "flex justify-center items-center" */}
    <div className="max-w-sm justify-center bg-deepblue  border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <h5 className="mb-2 text-4xl font-poppins tracking-tight text-gray-900 dark:text-white">START YOUR JOURNY FROM HERE</h5>
      </a>
      <p className="mb-3 font-poppins text-lightgray dark:text-gray-400">Hi there, your journey as a tutor begins with boundless opportunities and endless possibilities. As you step into our virtual classroom, you enter a world where your expertise and passion for teaching are celebrated and cherished </p>
      <div className="inline-flex rounded-md shadow-sm" role="group">
 <a href="/tutor/signup">
 <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-violet border border-lavender rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
    <svg className="w-3 h-3 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
    </svg>
    JOIN AS TUTOR
  </button>
  </a> 
 
 
</div>
    </div>
  </div>
 
</section>




        </div>
        
    );
}

export default LandingPage;




// HomePage

// Header

// Search

// Top trending courses

// course 1



// course container

