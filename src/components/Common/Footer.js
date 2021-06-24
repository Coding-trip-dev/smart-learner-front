import React from "react";
import "./scss/_footer.scss";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import CopyrightIcon from '@material-ui/icons/Copyright';



const icon = {
    fontSize: 12,
    height: 18,
    width: 18,
    paddingTop: 3,
    color: '#30B484',

}
const about_icon = {
    fontSize: 28,
    // padding: 5,
    paddingTop: 13,
    color: 'white',

}
const copyIcon = {
    fontSize: 14,
    marignTop: 5,
    marginRight: 5,
    position: 'relative',
    top: 3
}
const Footer = (props) => (
    <div className="footer-wrapper">
        <div className="footer">
            <div className="row">
                <div className="col-3 logo-section">
                    <div>
                        <img src="https://upload.wikimedia.org/wikipedia/en/2/20/Artist_Growth_Wide_Logo.png" alt="" className="logo-footer" />
                    </div>
                    <div className="desc-text">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio ducimus aspernatur voluptatum quia dolor. Ipsam officiis exercitationem inventore. Pariatur et eligendi accusamus nulla expedita soluta alias illo, aut nisi obcaecati.
                    </div>
                    <div className="location-wrapper">
                        <div className="location-icon">
                            <LocationOnIcon style={icon} />

                        </div>
                        <div className="location-text">
                            37160 Romaguera SquaresAI Gharbia, Abu Dhabi United Arab Emirates, AE
                        </div>
                    </div>
                    <div className="location-wrapper">
                        <div className="location-icon">
                            <PhoneIcon style={icon} />

                        </div>
                        <div className="location-text">
                            22, 9297629, <br />
                            62, 8821469
                        </div>
                    </div>
                    <div className="location-wrapper">
                        <div className="location-icon">
                            <MailIcon style={icon} />

                        </div>
                        <div className="location-text">
                            info@smartlearner.com
                        </div>
                    </div>
                </div>
                <div className="col-3 services-section">
                    <div className="heading-service">
                        Services
                    </div>
                    <div className="list-services">
                        <div className="item-li">
                            Learning
                        </div>
                        <div className="item-li">
                            Instructor
                        </div>
                        <div className="item-li">
                            Institute
                        </div>
                        <div className="item-li">
                            Freelancer
                        </div>
                    </div>
                </div>
                <div className="col-3 support-section">
                    <div className="heading-service">
                        Support
                    </div>
                    <div className="list-services">
                        <div className="item-li">
                            Help & Support
                        </div>
                        <div className="item-li">
                            Trust & Safety
                        </div>
                        <div className="item-li">
                            Blog
                        </div>
                        <div className="item-li">
                            Forum
                        </div>
                    </div>
                </div>
                <div className="col-3 about-section">
                    <div className="heading-service">
                        About
                    </div>
                    <div className="list-services">
                        <div className="item-li">
                            Help & Support
                        </div>
                        <div className="item-li">
                            Trust & Safety
                        </div>
                        <div className="item-li">
                            Blog
                        </div>
                        <div className="item-li">
                            Forum
                        </div>
                    </div>
                    <div className="icons-list">
                        <span className="icons" title="Youtube">
                            <YouTubeIcon style={about_icon} />
                        </span>
                        <span className="icons" title="Facebook">
                            <FacebookIcon style={about_icon} />
                        </span>
                        <span className="icons" title="Instagram">
                            <InstagramIcon style={about_icon} />
                        </span>
                        <span className="icons" title="Twitter">
                            <TwitterIcon style={about_icon} />
                        </span>
                    </div>
                </div>

            </div>
            <div className="row " style={{ padding: '0px 20px' }}>
                <div className="bottom-part">
                    <div className="col-10 left-side">
                        <div>
                            <img src="https://upload.wikimedia.org/wikipedia/en/2/20/Artist_Growth_Wide_Logo.png" alt="" className="logo-footer" />
                        </div>
                        <div className="copyRight">
                            <CopyrightIcon style={copyIcon} />
                            Smart Learners, 2020
                        </div>
                    </div>
                    <div className="col-1 right-side">
                        <div className="language">
                            <img src="http://pngimg.com/uploads/flags/flags_PNG14592.png" alt="" className="usa-flag" />
                            English
                        </div>
                    </div>
                    <div className="col-1 right-side">
                        <div className="language">
                            $USA
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
export default Footer; 