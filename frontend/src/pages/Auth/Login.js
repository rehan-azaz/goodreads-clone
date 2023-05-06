import React from 'react'
import logo from "../../assets/images/loginLogo.png";

const Login = () => {
  return (
    <div className="wraper-div">
      <div className='logoSection'>
        <img src={logo} alt="goodReads"/>
      </div>
      <div className='loginInnerContent'>
        <div className='signup'>
        <h1>
        Create Account
      </h1>
      <div>
        <label for="formGroupExampleInput" className="form-label">Your Name</label>
        <input type="text" className="form-control w-100" id="formGroupExampleInput" placeholder="Example input placeholder" />
      </div>
      <div>
        <label for="formGroupExampleInput" className="form-label">Your Name</label>
        <input type="text" className="form-control w-100" id="formGroupExampleInput" placeholder="Example input placeholder" />
      </div>
      <div>
        <label for="formGroupExampleInput" className="form-label">Your Name</label>
        <input type="text" className="form-control w-100" id="formGroupExampleInput" placeholder="Example input placeholder" />
        <p class="a-alert-content">Passwords must be at least 6 characters.</p>
      </div>
      <div>
        <label for="formGroupExampleInput" className="form-label">Your Name</label>
        <input type="text" className="form-control w-100" id="formGroupExampleInput" placeholder="Example input placeholder" />
 
      </div>
      <button type='button' className='createbtn'>Create account</button>
        </div>
      
      </div>
    </div>
  )
}

export default Login