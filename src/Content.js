import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Content extends Component {
  render() {
    return (
<div className="wrapper">
    <div className="top_container">
        <div className="container">
            <div className="top_form">
                <h3 className="top_form_heading">Accurate <span className="blue_text">Weather Forecast</span></h3>
                <div className="top_inner_container">
                    <p className="top_form_subheading">Enter a Zip Code, City or Place to get weather details of your local neighborhood.</p>

                    {/* <form className="f1" action="javascript:onInstallAction();">
                        <input type="text" name="text" placeholder="Zip Code" id="geolocation" className="in-1">
                    </form> */}

                    <div className="continue"><a className="install_extension continue" onClick="javascript:onInstallAction();"><strong>Get Local Weather</strong> <span></span></a></div>
                    
                    <div className="details">By clicking the button above, you are agreeing to install this extension and agreeing to abide by the <span><a href="eula.html" target="_blank">EULA</a></span>,<span><a href="PrivacyPolicy.html" target="_blank">Privacy Policy</a></span>,<span><a href="EndorsementPolicy.html" target="_blank"> Endorsement Disclaimer and DMCA Policy</a></span></div>

                    <div className="top_form_icons"><img src="../img/accurateWeatherForecast_1_icons.jpg" /></div>
                </div>
                
            </div>
        </div>
        
    </div>
    
    <div className="container mid_section">
        <h4 className="mid_heading">Be prepared for every weather condition, with quick links from your <span className="blue_text">New Tab Page!</span></h4>

        <div className="cleartext">
            <div className="mid_one_third">
                <div className="mid_image first_mid_image"></div>
                <div className="one_third_head cleartext">
                    <span className="one_third_icon one_third_icon_first"></span>
                    <p>Real-Time <span className="blue_text">Weather <br />Reports</span></p>
                </div>
                <p className="one_third_description">
                    Get live weather reports and keep up with daily, hourly and weekly forecasts of up to 7 to 10 days ahead.
                </p>
                <a className="one_third_action" onClick="javascript:onInstallAction();"><strong>Get Local Weather</strong><span className="mid_small_arrow"></span></a>
            </div>

            <div className="mid_one_third">
                <div className="mid_image second_mid_image"></div>
                <div className="one_third_head cleartext">
                    <span className="one_third_icon one_third_icon_second"></span>
                    <p>Severe <span className="blue_text">Weather <br />Radar</span></p>
                </div>
                <p className="one_third_description">
                    Open radar maps to view precipitation in motion and predict the onset of any severe weather condition in your local area.
                </p>
                <a  className="one_third_action" onClick="javascript:onInstallAction();"><strong>Get Local Weather</strong><span className="mid_small_arrow"></span></a>
            </div>

            <div className="mid_one_third last_mid_one_third">
                <div className="mid_image third_mid_image"></div>
                <div className="one_third_head cleartext">
                    <span className="one_third_icon one_third_icon_third"></span>
                    <p>Latest <span className="blue_text">Weather <br />News</span></p>
                </div>
                <p className="one_third_description">
                   Stay informed about the weather situation in your surroundings and places across the country with up-to-date weather news.
                </p>
                <a  className="one_third_action" onClick="javascript:onInstallAction();"><strong>Get Local Weather</strong><span className="mid_small_arrow"></span></a>
            </div>
        </div>
    </div>

    <div className="bot_section">
        <div className="container">
            <h4>Access These Features & More</h4>
            <ul className="bot_section_list cleartext">
                <li>Today's Local Weather</li>
                <li>10 Day Weather Forecast</li>
                <li>7 Day Local Weather Forecast</li>
                <li className="no_margin_list_item">5 Day Weather Forecast</li>
                <li>Weather Radar Maps</li>
                <li>National Weather</li>
                <li>Pollen Reports</li>
                <li className="no_margin_list_item">Weather News</li>
            </ul>
        </div>
    </div>

    <div className="footLinks">
        <div className="block">
            <ul className="cleartext">
                <li><a href="" target="_blank">Home</a></li>
                <li><a href="aboutus.html" target="_blank">About Us</a></li>
                <li><a href="eula.html" target="_blank">EULA</a></li>
                <li><a href="contact-us.html" target="_blank">Contact Us</a></li>
                <li><a href="EndorsementPolicy.html" target="_blank">Endorsement Disclaimer and DMCA Policy</a></li>
                <li className="last"><a href="uninstall.html" target="_blank">Uninstall</a></li>
            </ul>
        </div>
    </div>
    <div className="main-overlay">
        <div className="genOverlayBg">
            <p className="extension-text bounce resolFix">Click "Add Extension"<br /> to install</p>
        </div>
    </div>
    <div className="main-overlay-mac">
        <div className="genOverlayBg">
            <p className="extension-text bounce">Click "Add Extension"<br /> to install</p>
        </div>
    </div>
    <div className="main-overlay-ff">
        <div className="genOverlayBg-ff">
            <p className="extension-text-ff bounce"><span className="fst">Step 1 : Click Allow</span><br /><br /><span className="fst">Step 2 : Click Add</span></p>
        </div>
    </div>
</div>

    );
  }
}

export default Content;
