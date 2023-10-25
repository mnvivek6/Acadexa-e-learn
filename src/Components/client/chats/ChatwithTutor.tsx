import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { tutorById } from '../../../Services/client/getTutor';
import { Message, tutorType } from '../../../Models/Models';
import { AllmessagesBychatid, getchatid, sendingmessage } from '../../../Services/chat/getChatid';
import ScrollableFeed from 'react-scrollable-feed';
import { ViewProfile } from '../../../Services/client/profile';
import { io } from 'socket.io-client';

function ChatwithTutor() {


     const params = useParams();
    //  console.log(params);
     const ENDPOINT = "http://localhost:4000"
     
     let socket:any
     socket= io(ENDPOINT)
     const id = params.id as string  // using tutor id for getting tutor details
    //  console.log(id);
     
     const [tutor,setTutor]=useState<tutorType|undefined>(undefined)
     const [Messge,setMessge] = useState<Message[]>([])
     const [newMessge,setNewmessage] = useState<string|undefined>(undefined)
     const [chatid, setChatid] = useState<string|undefined>(undefined)
     const [userid,setUserid] = useState<string|undefined>(undefined)
   
     
     useEffect(() => {
      const fetchData = async () => {
        try {
          const tutorResponse = await tutorById(id);
          // console.log(tutorResponse, 'tutor response');
          setTutor(tutorResponse);
        } catch (error) {
          console.log(error);
        }
      };
    
      fetchData();
    }, [id]);
    useEffect(() => {
      const FetchMessages = async () => {
        try {
          const chatIdResponse = await getchatid(id);
          console.log(chatIdResponse._id, 'chat id is here');
        
          setChatid(chatIdResponse?._id);
          socket.emit(chatIdResponse?._id)
          const response = await AllmessagesBychatid(chatIdResponse?._id);
          console.log(response, 'response is here');
          setMessge(response)
        } catch (error) {
          console.error('Error in API request:', error);
        }
      }
      FetchMessages();
    }, [id]);

    useEffect(()=>{
      socket.emit("setup",userid)
    },[userid,socket])
     
    useEffect(()=>{
      socket.on("message recieved",(newMessge:Message)=>{
        if (chatid !== newMessge.chat._id) {
          console.log(`message from ${newMessge.user?.name}`);
          
        }else{
          setMessge([...Messge,newMessge])
        }
      })
    },[socket,Messge])
    useEffect(()=>{
      const userdata = async()=>{
        try {
           const response = await ViewProfile()
           console.log(response._id,'user eresponse');
           setUserid(response._id)
        } catch (error) {
          
        }
      }
      userdata()
    },[])
  
    const handleInputMessges = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setNewmessage(e.target.value)

    }
    const handleMessage = async()=>{

        const response = await sendingmessage(newMessge,chatid)
        console.log(response,'respones here');
        setNewmessage('')
        socket.emit('new message',response)
        setMessge([...Messge,response?.content])
        
    }
   
     
  return (
    <div>
        <div className='mt-24'>
            <div className=' h-96 border-2 border-greylight mx-20  rounded-2xl flex'>

                <div className='w-3/4 h-full bg-white rounded-l-2xl'>
                    <div className='h-80 border-gray-300 mb-2  p-5'>
                    <ScrollableFeed>
                    <ul>



<div
    style={{
        maxHeight: '100%', // Set the maximum height of the container
        overflowY: 'auto', // Enable vertical scrolling when content exceeds the height
        marginBottom: '25px'
    }}
>
    {
        Messge &&
        Messge.map((msg, index) => {
            // Check if the message is from the current user or the designer
            const isUserMessage = msg?.user?._id === userid;

            // Determine the alignment and background color based on the message sender
            const messageClassNames = `relative max-w-xl px-4 py-2 text-gray-700 rounded shadow ${isUserMessage ? "bg-gray-100 justify-end" : "justify-start" }`;

            return (
                <li
                    key={index} // Make sure to add a unique key when mapping through elements in a list
                    className={`${isUserMessage ? "justify-end" : "justify-start"} flex mb-2`}
                >
                    <div className={messageClassNames}>
                        <span className="block">{msg?.content}</span>
                    </div>
                </li>
            );
        })
    }  </div>



</ul>
                            </ScrollableFeed>
                    </div>

                    <div className='flex'>
                        <div className='relative w-full bg-gray-200 h-10 bg-greylight rounded-full mx-2 '>
                            {/* <Input className='ml-5 mt-1 font-medium text-gray-400'  Message . . ./> */}

                            <input type="text" className=' rounded-full  font-medium text-gray-400 '
                                placeholder='Message . . .'
                                onChange={(e)=>{handleInputMessges(e)}}
                                // value={newMessge}
                                name='message' required/>
                        </div>

                        <div className='flex items-center justify-end mr-1' onClick={()=>handleMessage()}>
                            <button className='absolute p-3 bg-lavender rounded-full mr-4 mb-2' >
                            <svg className="w-8 h-3 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                            </svg>

                            </button>

                        </div>
                    </div>

                </div>
                <div className='w-1/4 h-full bg-gray-100 rounded-r-2xl items-center justify-center'>

                    <div className='ml-14 items-center justify-center'>
                        <img alt="..." src="https://i.pinimg.com/474x/85/25/83/852583511c3109d7a4efa0c3a233be1e.jpg" className="rounded-full ml-5  mt-10  w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110" />
                        <h3 className='text-2xl mt-6 font-bold'>{tutor?.name}</h3>
                        {/* <h6 className='text-base ml-2 font-semibold mt-3'></h6> */}

                    </div>
                </div>

            </div>
        </div >
    </div>
  )
}

export default ChatwithTutor
