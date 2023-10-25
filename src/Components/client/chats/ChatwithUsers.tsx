import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ScrollableFeed from 'react-scrollable-feed';
import { ViewProfile } from '../../../Services/tutor/TutorLogin';
import { AllmessagesBychatid, Alltutormessagebychatid, chatWithUser, sendingmessage, sendingmessagetouser } from '../../../Services/chat/getChatid';
import { Message } from '../../../Models/Models';
import { io } from 'socket.io-client';

function ChatwithUsers() {

  const ENDPOINT = "http://localhost:4000"
  let socket:any
  socket = io(ENDPOINT)


    const params = useParams()
    const id = params.id as string
    const [newMessage,setNewmessage]= useState<string|undefined>(undefined)
    const [message,setMessage] = useState<Message[]>([])
    const [chatid, setChatid] = useState<string|undefined>(undefined)
    const [tutorid,setTutorid] = useState<string|undefined>(undefined)

    useEffect(()=>{
        const designerData = async()=>{
            try {
                const data = await ViewProfile()
                setTutorid(data._id)
                console.log(data);
                
                
            } catch (error) {
                console.log(error);
                
            }
        }
        designerData()
    })
    useEffect(()=>{
        const fetch = async()=>{
           try {
            const chats = await chatWithUser(id)
                console.log(chats,'chats here');
            const response = await Alltutormessagebychatid(chats._id)
            setChatid(chats._id)
            setMessage(response)
            console.log(response,'response here');
            
           } catch (error) {
            
           }
        }
        fetch()
    },[id])

     useEffect(()=>{
      socket.emit("setup",tutorid)
     },[tutorid,socket])

     useEffect(()=>{
      socket.on('message recieved',(newMessage:Message)=>{

        if (chatid!== newMessage.chat._id) {
          console.log(`message from ${newMessage.user?.name}`);
          
        }else{
          setMessage([...message,newMessage])
        }
      })
     },[socket,message])

    const handleInputMessges = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setNewmessage(e.target.value)

    }
    const handleMessage = async()=>{
        const response = await sendingmessagetouser(newMessage,chatid)
        console.log(response,'resonse sending chats here');
        
        setNewmessage('')
        socket?.emit('new message',response)
        setMessage([...message,response?.content])
    }
  return (
    <div>
        {/* <Sidebar/> */}
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
  message &&
  message.map((msg, index) => {
    // Check if the message is from the current user or the designer
    const isUserMessage = msg?.tutor?._id === tutorid;
    
    // Determine the alignment and background color based on the message sender
    const messageClassNames = `relative max-w-xl px-4 py-2 text-gray-700 rounded shadow ${
      isUserMessage ? "bg-gray-100 justify-end" : "justify-start"
    }`;

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
                            value={newMessage}
                            name='message' required/>
                    </div>

                    <div className='flex items-center justify-end mr-1' >
                        <button className='absolute p-3 bg-lavender rounded-full mr-4 mb-2' onClick={()=>handleMessage()} >
                        <svg className="w-8 h-3 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                         <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                        </svg>

                        </button>

                    </div>
                </div>

            </div>
            <div className='w-1/4 h-full bg-gray-100 rounded-r-2xl items-center justify-center'>

                <div className='ml-14 items-center justify-center'>
                    <img alt="..." src="https://i.pinimg.com/564x/01/c7/51/01c751482ef7c4f5e93f3539efd27f6f.jpg" className="rounded-full ml-5  mt-10  w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110" />
                    <h3 className='text-2xl mt-6 font-bold'>hi</h3>
                    {/* <h6 className='text-base ml-2 font-semibold mt-3'></h6> */}

                </div>
            </div>

        </div>
    </div >
</div>
  )
}

export default ChatwithUsers
