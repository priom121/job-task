import { Link } from 'react-router-dom';
import banner from '../../public/header.jpg'

const Header = () => {
    return (
        <div className='relative' >
           <img className=' h-[100vh] w-full' src={banner} alt="" />
           <div className=" text-center -mt-52 ">
            <p className='text-center text-white text-5xl font-bold -mt-80'>Job Task Management</p>
           <Link to='dashbord'>
           <button className='btn mt-5 btn-accent text-white shadow shadow-teal-400 '>Let,s Explore</button>
           </Link>
           </div>
        </div>
    );
};

export default Header;
// -mt-52 -mr-52