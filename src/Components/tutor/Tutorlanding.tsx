import React, { useState } from 'react'
import Landingnav from './nav/Landingnav'
import VerificationModal from './modal/VerificationModal';
import { boolean } from 'yup'
import { useParams } from 'react-router-dom';

function Tutorlanding() {

 const id = useParams()
//  console.log('tutor id is ',id.id);
  // const [tutorid,setTutorid] = useState<string|undefined>('')
  const [modal, setModal] = useState(false);
  // setTutorid(id.id)
  // console.log('tutorid:',tutorid);
  
  const [showModal,setShowModal] = useState<boolean>(false)
  // Function to toggle the modal
  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <>
    <Landingnav />
    <section
      className="flex items-center h-screen"
      style={{
        backgroundImage: 'url("/5421551.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="bg-transparent h-screen w-full flex justify-center items-center ">
        <div className="max-w-lg w-full justify-center bg-deelviolet border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700  h-60">
          <a href="#">
            <h5 className=" text-4xl font-poppins tracking-tight  text-white p-6">COME AND TEACH WITH US</h5>
          </a>
          <p className="pl-5 font-poppins text-gray-700 dark-text-gray-400 text-white">" A good teacher is like a candle it cosumes it self to light the way for others " <br />Verify with your details here</p>
          <button
              className="ml-48 mt-3 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-lavender rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={() => setShowModal(true)}// Activate the modal on button click
            >
              Click here
              <svg
                className="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
        </div>
      </div>
      {showModal && <VerificationModal showModal={showModal} setShowModal={setShowModal} tutorid={id.id}  />}
    </section>
  </>
  
  
    

  )
}

export default Tutorlanding
