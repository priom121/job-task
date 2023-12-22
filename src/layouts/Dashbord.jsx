
import { NavLink, Outlet } from 'react-router-dom';

const Dashbord = () => {
return (
<div className="flex max-w-screen-xl mx-auto">
   <div className="w-52 min-h-screen  bg-gradient-to-r from-[#383838] to-[#636262] text-white">
   <ul className='text-center text-lg mt-5'>                     
       <NavLink to='dashbord/task'>
        Create Task
       </NavLink>                    
       </ul>                           
   <ul className='text-center text-lg'>                     
       <NavLink to='dashbord/todo'>
       To Do</NavLink>                    
       </ul>                           
   <ul className='text-center text-lg'>                     
       <NavLink to='/'>
       Home</NavLink>                    
       </ul>                           
  </div>  
  <div className="flex-1">

<Outlet></Outlet>

</div>                               
 </div>
);
};

export default Dashbord;