import Heading from "./Heading";
import FooterForm from "./FooterForm";
import Bottom from "./Bottom";
import { useState } from "react";
import Button from "./Button";


// rang buoc hai chieu
function FormSubmit() {
    
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const handleSubmit = () =>{
        //call api
        console.log({
            password,
            email
        })
    };
    return (
      <div className="content">
    
        <form className="form-input">
            <Heading 
                name1="Welcome Back!"
                name2 = "Login to continue"
                idName="sub"
            />
  
            <div className="form-group">
                <i className="bx bxs-user icon-box"></i>
                <input 
                    type="email" 
                    name="email" placeholder="Username" 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    
                />  
            </div>
            <div className="form-group">
                <i className="bx bxs-lock-alt icon-box"></i>
                <input 
                    type="password" 
                    name="password" placeholder="Password" 
                    value={password}
                    onChange={e => setPass(e.target.value)}
                />
                    
            </div>
            <Bottom />
            <Button onClick={handleSubmit} />
            <div className="link-1">
                <a className= "new-user" href="#">New User?</a>
                <a href="#">Sign Up</a>
            </div>   
        </form>
        <FooterForm idName="term"  content= "Terms and Conditions &#124; Privacy Policy" />
      
     
      </div>
        
    );
  }
 
export default FormSubmit;