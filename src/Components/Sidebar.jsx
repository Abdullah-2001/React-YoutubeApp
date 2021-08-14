import react from 'react'
import './Sidebar.css'
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Logo from '../Images/logo2.png'
import $ from 'jquery';

class Sidebar extends react.Component {

    render() {

        let openNav = () => {
            document.getElementById("sidebar").style.width = "260px";
        }

        let closeNav = () => {
            document.getElementById("sidebar").style.width = "0";
        }

        function myFunction() {
            document.getElementById("myDropdown").style.display = "block";
        }

        $(document).ready(function () {
            $('#pages').on('click', function () {
                $('#myDropdown').hide();
            });
        });

        function myFunction2() {
            document.getElementById("myDropdown2").style.display = "block";
        }

        $(document).ready(function () {
            $('#pages').on('click', function () {
                $('#myDropdown2').hide();
            });
        });

        return (

            <div>

                <div className="navbar-container">

                    <div className="btn-container">
                        <div onClick={openNav} id="open-menu-btn">
                            <div class="bar1"></div>
                            <div class="bar2"></div>
                            <div class="bar3"></div>
                        </div>
                    </div>

                    <div className="logo-container">
                        <NavLink to="/">
                            <img id="logo" src={Logo} alt="" />
                        </NavLink>
                    </div>

                    <div className="search-bar-container">
                        <input type="text" placeholder="Search" />
                        <button className="search-btn"><i className="far fa-search"></i></button>
                        <i id="search" className="far fa-search"></i>
                        <i id="voice" className="fas fa-microphone"></i>
                    </div>

                    <div className="sign-in-container">

                        <div className="dropdown">
                            <i onClick={myFunction} id="bars" className="dropbtn far fa-bars"></i>
                            <div id="myDropdown" className="dropdown-content">
                                <p id="dropdown-para"><i class="dropdown-icon1 fab fa-youtube"></i>Youtube Tv</p>
                                <hr />
                                <p id="dropdown-para"><i class="dropdown-icon2 fas fa-play-circle"></i>Youtube Music</p>
                                <p id="dropdown-para"><i class="dropdown-icon3 fab fa-youtube"></i>Youtube Kids</p>
                                <hr />
                                <p id="dropdown-para"><i class="dropdown-icon4 fab fa-youtube"></i>Creator Academy</p>
                                <p id="dropdown-para"><i class="dropdown-icon5 fab fa-youtube"></i>Youtube for Artists</p>
                            </div>
                        </div>

                        <div className="dropdown2">
                            <i onClick={myFunction2} id="dots" className="far fa-ellipsis-v"></i>
                            <div id="myDropdown2" className="dropdown-content2">
                                <p id="dropdown-para2"><i class="dropdown-icon6 fas fa-adjust"></i>Appearance: Light</p>
                                <p id="dropdown-para2"><i class="dropdown-icon7 fas fa-language"></i>Language: British English</p>
                                <p id="dropdown-para2"><i class="dropdown-icon8 fas fa-globe"></i>Location: Pakistan</p>
                                <p id="dropdown-para2"><i class="dropdown-icon9 fas fa-cog"></i>Settings</p>
                                <p id="dropdown-para2"><i class="dropdown-icon10 fas fa-hourglass-half"></i>Your data in YouTube</p>
                                <p id="dropdown-para2"><i class="dropdown-icon11 fas fa-question-circle"></i>Help</p>
                                <p id="dropdown-para2"><i class="dropdown-icon12 fas fa-comment-alt-exclamation"></i>Send Feedback</p>
                                <p id="dropdown-para2"><i class="dropdown-icon13 fas fa-keyboard"></i>Keyboard Shortcuts</p>
                            </div>
                        </div>

                        <a href="https://accounts.google.com/ServiceLogin/signinchooser?service=youtube&uilel=3&passive=true&continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26hl%3Den-GB%26next%3Dhttps%253A%252F%252Fwww.youtube.com%252F&hl=en-GB&ec=65620&flowName=GlifWebSignIn&flowEntry=ServiceLogin">
                            <button className="sign-in"> <i className="fas fa-user-circle"></i> SIGN IN</button>
                        </a>

                    </div>

                </div>

                <div id="sidebar">

                    <i onClick={closeNav} id="close-left-arrow" class="far fa-chevron-left"></i>

                    <NavLink activeClassName="active" className="links" to="/"><i id="home1" className="fas fa-home-alt"></i>Home</NavLink>

                    <NavLink activeClassName="active" className="links" to="/trending"><i id="home1" className="fas fa-fire"></i>Trending</NavLink>

                    <NavLink activeClassName="active" className="links" to="/subscription"><i id="home1" className="fas fa-play-circle"></i>Subscription</NavLink>

                    <hr />

                    <NavLink activeClassName="active" className="links" to="/library"><i id="home1" className="far fa-play-circle"></i>Library</NavLink>

                    <NavLink activeClassName="active" className="links" to="/history"><i id="home1" className="far fa-history"></i>History</NavLink>

                    <hr />

                    <p className="sidebar-para">Sign in to like videos, comment and subscribe.</p>

                    <button className="sign-in-2"> <i className="fas fa-user-circle"></i> SIGN IN</button>

                    <hr />

                    <p className="best">BEST OF YOUTUBE</p>

                    <NavLink className="links-2" to="#"><i id="home2" className="fas fa-music"></i>Music</NavLink>
                    <NavLink className="links-2" to="#"><i id="home2" className="fas fa-trophy"></i>Sport</NavLink>
                    <NavLink className="links-2" to="#"><i id="home2" className="fas fa-gamepad"></i>Gaming</NavLink>
                    <NavLink className="links-2" to="#"><i id="home2" className="fas fa-newspaper"></i>News</NavLink>
                    <NavLink className="links-2" to="#"><i id="home2" className="far fa-video"></i>Live</NavLink>
                    <NavLink className="links-2" to="#"><i id="home2" className="fab fa-discord"></i>360 Video</NavLink>

                    <hr />

                    <NavLink className="links-3" to="#"><i id="plus" className="fas fa-plus-circle"></i>Browse Channels</NavLink>

                    <hr />

                    <p className="more">MORE FROM YOUTUBE</p>

                </div>

            </div >

        )

    }

}

export default Sidebar;