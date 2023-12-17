import { useLocation, useNavigate } from "react-router-dom";

const li = 'p-4 hover:bg-yellow-200/20 hover:rounded-xl transition-all duration-500 cursor-pointer';

const active = 'p-4 bg-yellow-200/30 rounded-xl transition-all duration-300 text-white cursor-pointer';


const NavHeader = () => {
 const navigate = useNavigate();
 const location = useLocation();

 return (
  <nav className="bg-yellow-500 hidden lg:block  ">
   <ul className="font-semibold flex">

    <li
     className={location.pathname === '/' ? active : li}
     onClick={() => {
      navigate('/');
     }}
    > Home</li>

    <li
     className={location.pathname === '/landing' ? active : li}
     onClick={() => {
      navigate('/landing');
     }}
    >Landing</li>

    <li
     className={location.pathname === '/portfolio' ? active : li}
     onClick={() => {
      navigate('/portfolio');
     }}
    >Portfolio</li>

    <li
     className={location.pathname === '/project' ? active : li}
     onClick={() => {
      navigate('/project');
     }}
    >Project</li>

    <li
     className={location.pathname === '/services' ? active : li}
     onClick={() => {
      navigate('/services');
     }}
    >Services</li>

    <li
     className={location.pathname === '/service' ? active : li}
     onClick={() => {
      navigate('/service');
     }}
    >Service</li>

    <li
     className={location.pathname === '/blog' ? active : li}
     onClick={() => {
      navigate('/blog');
     }}
    >Blog</li>

    <li
     className={location.pathname === '/about' ? active : li}
     onClick={() => {
      navigate('/about');
     }}
    >About</li>

    <li
     className={location.pathname === '/contact' ? active : li}
     onClick={() => {
      navigate('/contact');
     }}
    >Contact</li>
   </ul>
  </nav>
 );
};

export default NavHeader;