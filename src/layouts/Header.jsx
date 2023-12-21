import banner from '../../public/header.jpg'

const Header = () => {
    return (
        <div className='relative' >
           <img className=' h-[80vh] w-full' src={banner} alt="" />
           <div className=" text-center -mt-52 ">
           <button className='btn  btn-accent text-white '>Let,s Explore</button>
           </div>
        </div>
    );
};

export default Header;
// -mt-52 -mr-52