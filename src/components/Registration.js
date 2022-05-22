import React from 'react'
import { useState } from 'react'
import emailjs from 'emailjs-com'
import "../index.css"
const initialState = {
  name: '',
  email: '',
  message: '',
}
const initialValues = {
    email: "",
    password: "",
    status: "",
  };
const Registration = () => {
    const [{ name, email, message }, setState] = useState(initialState)
    const [values, setValues] = useState(initialValues);
    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);
    const [status, setStatus] = useState(null);
    const handleChange = (e) => {
      const { name, value } = e.target
      setState((prevState) => ({ ...prevState, [name]: value }))
    }
    const clearState = () => setState({ ...initialState })
  
    const onchangehandler = (e) => {
        const { name, value } = e.target;
        let inputValues = values;
        // validateDetails(name, value);
        inputValues[name] = value;
        setValues({ ...inputValues });
      };
    const getLocation = () => {
        if (!navigator.geolocation) {
          setStatus('Geolocation is not supported by your browser');
        } else {
          setStatus('Locating...');
          navigator.geolocation.getCurrentPosition((position) => {
            setStatus(null);
            setLat(position.coords.latitude);
            setLng(position.coords.longitude);
          }, () => {
            setStatus('Unable to retrieve your location');
          });
        }
      }
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
            <div className='register-content'>
                <div className='section-title'>
                  <h2>Registration</h2>
              </div>
                         <div className="login-form">
                            <form name='sentMessage' validate onSubmit={handleSubmit}>
                                <select className='form-control'
                              name="status"
                              value={values.status}
                              onChange={(e) => onchangehandler(e)}
                                    aria-label="Default select example">
                            <option value="">Select Type</option>
                            <option value="r">Restaurant</option>
                             <option value="o">Other Providers</option>
                          </select>
                        <input
                          type='text'
                          id='name'
                          name='name'
                          className='form-control'
                          placeholder='Name'
                          required
                          onChange={handleChange}
                        />
                        <p className='help-block text-danger'></p>
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
                         <input
                          type='tel'
                          id='phone'
                          name='Phone'
                          className='form-control'
                          placeholder='Phone'
                          required
                          onChange={handleChange}
                        />
                        <p className='help-block text-danger'></p>
                                {values.status === "r" ? (
                                    <input
                                        type='text'
                                        id='res'
                                        name='res'
                                        className='form-control'
                                        placeholder='Restaurant Name'
                                        required
                                        onChange={handleChange}
                                    />) : ""}
                                
                                <textarea
                                        type='textarea'
                                        id='res'
                                        name='address'
                                        className='form-control'
                                        placeholder='Address'
                                        required
                                        onChange={handleChange}
                                    />
                                {/* <button onClick={getLocation}>Get Location</button>
                             <h1>Coordinates</h1>
                          <p>{status}</p>
                          {lat && <p>Latitude: {lat}</p>}
                          {lng && <p>Longitude: {lng}</p>} */}
                  <button type='submit' className='btn btn-custom btn-lg'>
                Register
                  </button>
  
  
                  {/* <p className='c-ac' onClick={() => { return (window.location = "/register") }}>Create account</p> */}
              </form>
              </div>
              </div>
            </div>
            </div>
          </div>
    )
  }

export default Registration