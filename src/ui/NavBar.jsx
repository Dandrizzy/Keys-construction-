import { useLocation, useNavigate } from "react-router-dom";

const li = 'p-4 hover:bg-yellow-200/30 rounded-xl transition-all duration-300 hover:text-white cursor-pointer';

const active = 'p-4 bg-yellow-200/30 rounded-xl transition-all duration-300 text-white cursor-pointer';

const NavBar = ({ setOpenNav }) => {
 const navigate = useNavigate();
 const location = useLocation();
 const home = location.pathname === '/';
 return (
  <nav className="w-full bg-yellow-500 border-t-4 border-gray-900">
   <ul className="p-4 font-semibold">

    <li
     className={home ? active : li}
     onClick={() => {
      navigate('/');
      setOpenNav(false);
     }}
    > Home</li>

    <li
     className={location.pathname === '/landing' ? active : li}
     onClick={() => {
      navigate('/landing');
      setOpenNav(false);
     }}
    >Landing</li>

    <li
     className={location.pathname === '/portfolio' ? active : li}
     onClick={() => {
      navigate('/portfolio');
      setOpenNav(false);
     }}
    >Portfolio</li>

    <li
     onClick={() => {
      navigate('/project');

      setOpenNav(false);
     }}
     className={location.pathname === '/project' ? active : li}
    >Project</li>

    <li
     className={location.pathname === '/services' ? active : li}
     onClick={() => {
      navigate('/services');
      setOpenNav(false);
     }}
    >Services</li>

    <li
     className={location.pathname === '/service' ? active : li}
     onClick={() => {
      navigate('/service');
      setOpenNav(false);
     }}
    >Service</li>

    <li
     className={location.pathname === '/blog' ? active : li}
     onClick={() => {
      navigate('/blog');
      setOpenNav(false);
     }}
    >Blog</li>

    <li
     className={location.pathname === '/about' ? active : li}
     onClick={() => {
      navigate('/about');
      setOpenNav(false);
     }}
    >About</li>

    <li
     onClick={() => {
      navigate('/contact');
      setOpenNav(false);
     }}
     className={location.pathname === '/contact' ? active : li}
    >Contact</li>

    <li
     onClick={() => {
      navigate('/login');
      setOpenNav(false);
     }}
     className={li}
    >Login</li>
   </ul>
  </nav>
 );
};

export default NavBar;