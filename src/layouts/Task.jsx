import axios from "axios";
import Swal from "sweetalert2";


const Task = () => {
     const handleTask =(e)=>{
      e.preventDefault()
      const form = e.target;
      const Title = form.title.value;
      const Deadline = form.date.value;
      const Priority = form.priority.value;
      const Description = form.description.value;

     const data ={Title,Deadline,Priority,Description}
     console.log(data);
     
     axios.post('http://localhost:5000/postJob', data )
     .then(res => {
         console.log(res.data);
         if (res.data.insertedId) {
             Swal.fire({
                 position: "top-end",
                 icon: "success",
                 title: `Added to your Bio Data collection`,
                 showConfirmButton: false,
                 timer: 1500
             });

         }
     })
     .catch(error => {
         console.error("Error  post request:", error);
     });

     }

  return (
     <div>
     <div className="bg-teal-500 ml-4 rounded-xl py-10 mt-5 mb-5 max-w-screen-xl mx-auto">
 <form onSubmit={handleTask} >
 <label className="ml-10 ">
   <span className=" text-2xl mt-4 font-medium">Create Task</span>
      </label>
      <div className="">
      <div className="mx-auto w-1/2">
         <label className="label">
         <span className="label-text text-base">Title</span>
         </label>
            <label className="input-group w-full">
              <input type="text" placeholder="title" name="title" className="input input-bordered w-full " />
         </label>
              </div>
      <div className="w-1/2 mx-auto mt-5 ">
      <span className="label-text text-base">Deadline</span>
      <label className="input-group">
     <input type="date" placeholder=" Date" name="date" className="input input-bordered w-full" />
      </label>
      </div>
      <div className="w-1/2 mx-auto mt-5 ">
      <span className="label-text text-base">Priority</span>
      <label className="input-group">
     <input type="text" placeholder="Priority" name="priority" className="input input-bordered w-full" />
      </label>
      </div>
      <div className="w-1/2 mx-auto mt-5 ">
      <span className="label-text text-base">Description
</span>
      <label className="input-group">
     <input type="text" placeholder="Description" name="description" className="input input-bordered w-full" />
      </label>
      </div>
    <div className="text-center mt-5">
    <button className="btn btn-info ">Create</button>
    </div>
      </div>



 </form>   
</div>                                                                                      
 </div>
 );
};

export default Task;