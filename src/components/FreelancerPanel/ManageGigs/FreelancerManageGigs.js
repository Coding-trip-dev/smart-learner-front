import React, { useEffect, useState } from "react";
import "./scss/_manageGigs.scss";
import { Link } from "react-router-dom";
import * as routes from "../../../constants/routePaths";
import Service from "../../Common/GeneralSlider/Service";
import ManageSingleGig from "./ManageSingleGig/ManageSingleGig";
import { connect, useSelector } from "react-redux"
import { getAllGigs } from '../../../redux/actions/freelancer/servicesAction' 




const FreelancerManageGigs = (props) => {

    const { getAllGigs, gigs } = props
    const [gig, setGigs] = useState([])
    let freelancer_id = useSelector(state => state.auth.user_id)
    useEffect(() => {
        getAllGigs({ freelancer_id })
    }, [])

    useEffect(() => {
        setGigs(gigs)
    }, [gigs])


    

    return (
        <div className="manageGigsContainer">
            <div className="row">
                <div className="col-md-12">
                    <h3 className="gigHeading">Manage Gigs</h3>
                </div>
                <div className="col-md-12 text-right mb-3">
                    <Link to={routes.freelancerService} ><button className="addGigBtn">Add Gig</button></Link>
                </div>
            </div>
            <div className="row"> 
                {gig ?
                    gig.map((item, key) => {
                        return <div className="col-3 p-0"><ManageSingleGig gig={item} key={key} user_id={freelancer_id}/></div>
                    })
                    : 
                    null}

                {/* <div className="col-3 p-0"><ManageSingleGig /></div>
                <div className="col-3 p-0"><ManageSingleGig /></div>
                <div className="col-3 p-0"><ManageSingleGig /></div>
                <div className="col-3 p-0"><ManageSingleGig /></div> */}
            </div>
        </div>
    )
}
let mapStateToProps = state => {
    return {
        gigs: state.FreelancerServices.gigs
    }
}
export default connect(mapStateToProps, { getAllGigs })(FreelancerManageGigs);