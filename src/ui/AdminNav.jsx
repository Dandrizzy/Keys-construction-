import { useLocation, useNavigate } from 'react-router-dom';
// import profile from '../asset/img/profile.jpg';
import H1 from './H1';
import { useUser } from '../features/authentication/useUser';
import { formatDate } from '../utils/helpers';

const AdminNav = ({ setOpenNav }) => {
 const navigate = useNavigate();
 const location = useLocation();
 const { user, } = useUser();
 const { fullName, avatar } = user.user_metadata;
 const lastSignIn = formatDate(user.last_sign_in_at);
 const msg = location.pathname === '/admin/messages';
 const admin = location.pathname === '/admin';
 const faqs = location.pathname === '/admin/faqs';
 const projects = location.pathname === '/admin/projects';
 const services = location.pathname === '/admin/services';
 const users = location.pathname === '/admin/user';
 const edit = location.pathname === '/admin/edit';

 const active = ' bg-yellow-200/30 p-4 rounded-md hover:rounded-lg cursor-pointer';
 return (
  <nav className=' tracking-wide'>
   <div className=" divide-x-4 divide-yellow-200 uppercase p-4 flex flex-col sm:h-[100vh]  gap-2 ">
    <div className=" text-center">
     <img src={avatar || "default-user.jpg"} alt={fullName} className='h-[100px] w-[100px] rounded-full mx-auto border-white border-4 shadow-md drop-shadow-lg' />
     <H1>{fullName}</H1>
     <p className=' text-sm'>last sign in {lastSignIn}</p>
    </div>

    <div className={admin ? active : " hover:bg-slate-200/50 p-4 rounded-md hover:rounded-lg cursor-pointer"} onClick={() => {
     navigate('/admin');
     setOpenNav(false);
    }}>
     dashboard
    </div>

    <div className={msg ? active : " hover:bg-slate-200/50 p-4 rounded-md hover:rounded-lg cursor-pointer"} onClick={() => {
     navigate('/admin/messages');
     setOpenNav(false);
    }}>
     messages
    </div>

    <div className={projects ? active : " hover:bg-slate-200/50 p-4 rounded-md hover:rounded-lg cursor-pointer"} onClick={() => {
     navigate('/admin/projects');
     setOpenNav(false);
    }}>
     projects
    </div>

    <div className={services ? active : " hover:bg-slate-200/50 p-4 rounded-md hover:rounded-lg cursor-pointer"} onClick={() => {
     navigate('/admin/services');
     setOpenNav(false);
    }}>services</div>

    <div className={faqs ? active : " hover:bg-slate-200/50 p-4 rounded-md hover:rounded-lg cursor-pointer"} onClick={() => {
     navigate('/admin/faqs');
     setOpenNav(false);
    }}>faqs</div>

    <div className={edit ? active : " hover:bg-slate-200/50 p-4 rounded-md hover:rounded-lg cursor-pointer"} onClick={() => {
     navigate('/admin/edit');
     setOpenNav(false);
    }}>edit account</div>

    <div className={users ? active : " hover:bg-slate-200/50 p-4 rounded-md hover:rounded-lg cursor-pointer"} onClick={() => {
     navigate('/admin/user');
     setOpenNav(false);
    }}>create new admin</div>

   </div>
  </nav>
 );
};

export default AdminNav;