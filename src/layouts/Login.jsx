import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import image from '../../public/signup.jpg'
const Login = () => {

 const handleLogin =(e)=>{
 e.preventDefault()
 const form = e.target;
const email = form.email.value;
 const password = form.password.value;
 console.log(email,password);   
}

const handleGoogle =(e)=>{
 e.preventDefault()

 }
                                                                                       
  return (
<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className=" w-1/2 mr-6">
     <img src={image} alt="" />
   {/* <Lottie animationData={login}></Lottie> */}
    </div>
    <div className="card flex-shrink-0 w-full max-w-md shadow-2xl 
   bg-gradient-to-r from-[#383838] to-[#636262] text-white">
      <form onSubmit={handleLogin} className="card-body">
      <h1 className="text-2xl font-bold">Login!</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input text-black input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input text-black input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover text-white">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <p className='text-center'>New please?   
        <Link className='text-blue-600 font-medium' to='/signUp'>
         Sign Up
        </Link></p>
      </form>
      <div className="py-4 text-center">
       <p className="text-center text-lg text-cyan-400">or connect with</p>
      <button onClick={handleGoogle} className="w-10 text-center text-">
       {/* <FcGoogle className="text-4xl mt-2"></FcGoogle> */}
       <div className="flex justify-between">
       <FcGoogle className="text-3xl mt-2 mr-2" /><FaGithub className="text-3xl mt-2" />
       </div>
      </button>
      </div>
    </div>
  </div>
</div>
 );
};

export default Login;