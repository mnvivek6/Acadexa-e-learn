import React, { useEffect, useState } from 'react';
import { UserType } from '../../Models/Models';
import { blockuser, getUsers } from '../../Services/admin/getUsers';
import Sidebar from './Sidebar/Sidebar';
import Searchuser from './search/Searchuser';
import ListingTable from './tables/ListingTable';


function Allusers() {
  const [userData, setUserData] = useState<UserType[] | undefined>(undefined);
  
  
  useEffect(() => {
    const getUse = async () => {
      try {
        const users = await getUsers();
        console.log(users);
        
        setUserData(users);
      } catch (error) {
        console.log(error);
      }
    };
    getUse();
  }, []);

  return (
    <div className='h-full'>
      <Sidebar />
      {/* <Searchuser setSearched={setSearched}/> */}
      <ListingTable userData={userData} setUserData={setUserData} />
    </div>
  );
}

export default Allusers;
