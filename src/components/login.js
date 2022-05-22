import { useState } from 'react'
import emailjs from 'emailjs-com'
import "../index.css"
import ZFWlogo from "../images/zfw2.png"
const initialState = {
  name: '',
  email: '',
  message: '',
}
 const Login = (props) => {
  const [{ name, email, message }, setState] = useState(initialState)

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }
  const clearState = () => setState({ ...initialState })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, email, message)
    emailjs
      .sendForm(
        'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID'
      )
      .then(
        (result) => {
          console.log(result.text)
          clearState()
        },
        (error) => {
          console.log(error.text)
        }
      )
  }
  return (
    <div>
      <div id='login'>
        <div className='container login'>
          <div className='login-content'>
            <div className='section-title'>
              {/* <img src={ZFWlogo} width="100px" height="100px" class="d-inline-block align-top" alt=""/> */}
              {/* <h2>0FW</h2> */}
              <h2>Login</h2>
            </div>
            <div className="login-form">
              <form name='sentMessage' validate onSubmit={handleSubmit}>
              <select   className='form-control' aria-label="Default select example">
  <option selected>Admin</option>
  <option value="1">Restaurant</option>
  <option value="2">Other Providers</option>
  {/* <option value="3">Three</option> */}
</select>
                      <input
                        type='email'
                        id='email'
                        name='email'
                        className='form-control'
                        placeholder='Email'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                      <input
                        type='password'
                        id='password'
                        name='password'
                        className='form-control'
                        placeholder='Password'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    {/* </div> */}
                <div id='success'></div>
                <button type='submit' className='btn btn-custom btn-lg'>
                Login
                </button>


                <p className='c-ac' onClick={() => { return (window.location = "/register") }}>Create account</p> 
            </form>
            </div>
            </div>
          </div>
          </div>
        </div>
  )
}
export default Login