import IconButton from './IconButton';
import { HiBars3, HiShoppingCart } from 'react-icons/hi2';
import NavBar from './NavBar';
import { useState } from 'react';
import NavHeader from './NavHeader';
const Header = () => {

  const [openNav, setOpenNav] = useState(false);

  return (
    <>
      <div className='flex justify-between items-center p-4 bg-yellow-500 '>
        <h1 className='sm:text-4xl text-xl font-semibold text-slate-100'>
          Keys Construct
        </h1>


        <div className='flex items-center text-slate-100'>

          <NavHeader />
          <IconButton className='flex gap-4'>
            <HiShoppingCart className=' hover:bg-yellow-200/20 hover:rounded-xs transition-all duration-500' />
            <HiBars3
              className='lg:hidden'
              onClick={() => setOpenNav(open => !open)} />
          </IconButton>
        </div>
      </div>
      {openNav && <NavBar setOpenNav={setOpenNav} />}
    </>
  );
};

export default Header;