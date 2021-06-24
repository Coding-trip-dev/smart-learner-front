import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import * as routes from "../../constants/routePaths";
import "./scss/_navBar.scss";
import Modal from "../HomePage/Modal";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Cookies from 'js-cookie'
import { useSelector } from "react-redux";

const shopingCart = {

    color: '#30B484',
    margin: '0px 10px'
}

const downcaret = {

    color: '#30B484',
    margin: '0px 10px',
    position: 'relative',
    top: 4
}


const TopNavBar = (props) => {
    // const { switchModal } = props;
    let history = useHistory();
    const [anchorEl, setAnchorEl] = React.useState(null);
    // let user = JSON.parse((Cookies.get('user')))
    let user = useSelector(state => state.auth.userDetail)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const logoutUser = e => {
        Cookies.remove('user');
        Cookies.remove('home');
        setTimeout(() => {
            history.push('/')
            
        }, 1000);
    }
    const home = Cookies.get('home')

    return (
        <nav className="custom-navbar navbar navbar-expand-lg navbar-light">
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={() => {
                    handleClose()
                    logoutUser()
                }}>Logout</MenuItem>
            </Menu>
            <Link to={home ? home: routes.Home} className="navbar-brand logo-text">
                <span>SMART</span> LEARNERS
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarSupportedContent">
                <div className=" navbar-item searchbar-item" id="navbarSupportedContent">
                    <form className="form-inline h-100 my-2 my-lg-0 ">
                        <img className="search-icon" src={require("../../assets/icons/search.png")} alt="" />
                        <input
                            type="text"
                            className=" navbar-search"
                            placeholder="Find Services"
                        />
                        <div className="input-group-append h-100">
                            <button className="btn search-btn h-100" type="button">
                                Search
              </button>
                        </div>
                    </form>
                </div>
                <div className="navbar-item action-navbar-item">
                    <button
                        className="sign-btn mr-2"
                        onClick={(e) => {
                            e.preventDefault();
                            history.push("/become-freelancer")
                        }}
                    >
                        Become Partners
                    </button>
                    <ShoppingCartOutlinedIcon style={shopingCart} />

                    <div className="user-wrapper" style={{ cursor: 'pointer' }}>
                        <div className="user-img-wrapper">
                            <img
                                src={`http://18.217.77.0:5000/uploads/${user.picture}`}
                                alt=""
                                className="user-img"
                            />
                        </div>
                        <div className="user-name">
                            {user.name}
                        </div>
                        <div className="caret">
                            <ExpandMoreOutlinedIcon style={downcaret} onClick={handleClick} />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
};
export default TopNavBar;
