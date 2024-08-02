import { useForm } from "react-hook-form";
import { LuContact } from "react-icons/lu";
import "./styles.css";

export default function App() {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = handleSubmit((data) => {console.log(data);})
  
  return (
    <div className="App">
      <div className = 'header'>
        <div className="headerContainer">
          <div className="icon">
            <LuContact size={50} className="icon"/>
          </div>
          <h1 className='title'>Contact Form</h1>
        </div>
       
      </div>
      
      <div >
        <form onSubmit={onSubmit} className="form-control" >
          <label>Full Name</label>
          <input {... register("fullName",{
            required:true
          })} 
            placeholder="Full Name"/>
          {errors.fullName && <p className="errorMsg">Full Name is required</p>} 
          <label>Email</label>
          <input {... register("email",{
          required: true,
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address",
            },
          })}
            placeholder="Email" type="email" />
          {errors.email && <p className="errorMsg">Email is required</p>}
          <label>Message</label>
          <textarea {... register("message",{
            required:true,
          })} 
            placeholder="Write your message here "></textarea>
            {errors.message && <p className="errorMsg">Message is required</p>}
          
          <button type="submit">Submit</button>
      
        </form>
      </div> 
    </div>
  );
}