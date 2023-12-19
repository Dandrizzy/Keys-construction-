import IconButton from './IconButton';
import { HiBars3 } from 'react-icons/hi2';
import { useState } from 'react';
import AdminNav from './AdminNav';
import Logout from '../features/authentication/Logout';
const AdminHeader = () => {

  const [openNav, setOpenNav] = useState(false);

  return (
    <>
      <div className='flex justify-between items-center p-4 bg-yellow-500 '>
        <h1 className='sm:text-4xl text-xl font-semibold text-slate-100'>
          Admin DashBoard
        </h1>


        <div className='flex items-center text-slate-100'>

          <IconButton className='flex gap-4'>

            <HiBars3
              className='sm:hidden'
              onClick={() => setOpenNav(open => !open)} />
          </IconButton>
          <Logout />
        </div>
      </div>
      {openNav && <AdminNav setOpenNav={setOpenNav} />}
    </>
  );
};

export default AdminHeader;