import { useLocation, useNavigate } from 'react-router-dom';
import profile from '../asset/img/profile.jpg';
import H1 from './H1';

const AdminNav = () => {
 const navigate = useNavigate();
 const location = useLocation();
 const msg = location.pathname === '/admin/messages';
 const admin = location.pathname === '/admin';
 const faqs = location.pathname === '/admin/faqs';
 const projects = location.pathname === '/admin/projects';
 const services = location.pathname === '/admin/services';

 const active = ' bg-green-200/30 p-4 rounded-md hover:rounded-lg cursor-pointer';
 return (
  <nav className=''>
   <div className=" divide-x-4 divide-green-200 uppercase p-4 flex flex-col sm:h-[100vh]  gap-2 ">
    <div className=" text-center">
     <img src={profile} alt="" className='h-[100px] w-[100px] rounded-full mx-auto border-white border-4 shadow-md drop-shadow-lg' />
     <H1>MY NAME</H1>


    </div>
    <div className={admin ? active : " hover:bg-slate-200/50 p-4 rounded-md hover:rounded-lg cursor-pointer"} onClick={() => navigate('/admin')}>dashboard</div>
    <div className={msg ? active : " hover:bg-slate-200/50 p-4 rounded-md hover:rounded-lg cursor-pointer"} onClick={() => navigate('/admin/messages')}>messages</div>
    <div className={projects ? active : " hover:bg-slate-200/50 p-4 rounded-md hover:rounded-lg cursor-pointer"} onClick={() => navigate('/admin/projects')}>projects</div>
    <div className={services ? active : " hover:bg-slate-200/50 p-4 rounded-md hover:rounded-lg cursor-pointer"} onClick={() => navigate('/admin/services')}>services</div>
    <div className={faqs ? active : " hover:bg-slate-200/50 p-4 rounded-md hover:rounded-lg cursor-pointer"} onClick={() => navigate('/admin/faqs')}>faqs</div>
   </div>
  </nav>
 );
};

export default AdminNav;