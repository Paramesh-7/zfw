import "../index.css"

import { Link } from 'react-router-dom';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Home from "./home"
import Login from "./login"
import ZfWlogo from "../images/zfw-title.png"
const Navigation = (props) => {
  // let navigate = useNavigate();
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      {/* <div className='container'> */}
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
        </button>
        {/* <a class="navbar-brand" href="#">
    <img src={ZfWlogo} width="30" height="30" class="d-inline-block align-top" alt=""/>
    Bootstrap
  </a> */}
        <div className="nav-logo">
        <a className='navbar-brand page-scroll' href='#page-top'>
        {/* <img src={ZfWlogo} width="50px" height="50px" class="d-inline-block align-top" alt=""/> */}
          ZFW
        </a>{' '}
        </div>
    
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#header' className='page-scroll'>
              Home
              </a>
            </li>
            <li>
              <a href='#intro' className='page-scroll'>
                Intro
              </a>
            </li>
            <li>
              <a href='#services' className='page-scroll'>
            Solutions
              </a>
            </li>
            <li>
              <a href='#portfolio' className='page-scroll'>
             Statistics
              </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll'>
                Contact Us
              </a>
          </li>
          <button className="btn btn-primary login" onClick={() => {
           return (window.location = "/login");
                        }}>Login</button>
   
        </ul>
        </div>
    </nav>
  )
}
export default Navigation