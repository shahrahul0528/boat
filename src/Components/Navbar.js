import logo from '../Assets/Navbar/logo.avif'
import '../SCSS/Common.scss'
import './SCSS/navbar.scss'
import './SCSS/common.scss'
import 'animate.css'
import seachIcon from '../Assets/Navbar/searchIcon.png'
import person from '../Assets/Navbar/person.png'
import care from '../Assets/Navbar/care.png'
import cart from '../Assets/Navbar/cart.png'
import {Link } from "react-router-dom";


function Navbar(params) {
    return(
        <div className="main-navbar shadow-lg border">
            <div className="row navbarCont m-4">
                <div className="col-2">
                    {/* <a href="#"> */}
                            <Link to="/"><img src={logo} className="img-fluid"/></Link>
                    {/* </a> */}
                </div>
                <div className="col-6">
                    <div className="links">
                        <ul className="*">
                            <li className="">
                                <Link to="/categories"><a href="#" className="animate__pulse">CATEGORIES </a></Link>
                                {/* <i class="bi bi-chevron-down"></i> */}
                            </li>
                            <li className="">
                            <Link to="/dailydeals"><a href="#" className="animate__pulse">DAILY DEALS </a></Link>
                                {/* <Link to="/services">Services</Link> */}
                            </li>
                            <li className="">
                                {/* <Link to="/order">Order</Link> */}
                                <Link to="/more"><a href="#" className="animate__flip">MORE </a></Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-3">
                    <div className="row main-input">
                        <div className="col-2  searchLogo">
                            <img src={seachIcon}/>
                        </div>
                        <div className="col-9 col-sm-0 inputPart">
                            <input type="text" name='headerSearch' placeholder='Search Chrismas'/>
                        </div>
                        <div className="col-1">
                            
                        </div>
                    </div>
                </div>
                <div className="col-1">
                    <div className='row'>
                        <div className='col-4'>
                            <a href='#'>
                            <img src={person} className='headIcon'/>
                            </a>
                        </div>
                        <div className='col-4'>
                            <a href='#'>
                            <img src={care} className='headIcon' />
                            </a>
                        </div>
                        <div className='col-4'>
                            <a href='#'>
                            <img src={cart} className='headIcon' />
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navbar