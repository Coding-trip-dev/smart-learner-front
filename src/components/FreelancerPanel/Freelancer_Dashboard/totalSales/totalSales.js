import React, { useState, useEffect } from "react";
import "./sales.scss";
import { withRouter } from 'react-router-dom'
import { connect, useSelector } from 'react-redux'
import Gig from '../ManageSingleGig/ManageSingleGig'
import { getAllGigs } from '../../../../redux/actions/freelancer/servicesAction'


const students = [
    {
        name: " sarfaraz khan",
        time: '5 hours ago',
        subject: "introduction to chemistry"
    },
    {
        name: " sarfaraz khan",
        time: '5 hours ago',
        subject: "introduction to chemistry"
    },
    {
        name: " sarfaraz khan",
        time: '5 hours ago',
        subject: "introduction to chemistry"
    },
    {
        name: " sarfaraz khan",
        time: '5 hours ago',
        subject: "introduction to chemistry"
    },
    {
        name: " sarfaraz khan",
        time: '5 hours ago',
        subject: "introduction to chemistry"
    },
    {
        name: " sarfaraz khan",
        time: '5 hours ago',
        subject: "introduction to chemistry"
    },


]


const TotalGigs = props => {

    const { setNewProfile, getAllGigs, gigs } = props
    const [gig, setGigs] = useState([])
    let freelancer_id = useSelector(state => state.auth.user_id)
    useEffect(() => {
        getAllGigs({ freelancer_id })
    }, [])

    useEffect(() => {
        setGigs(gigs)
    }, [gigs])

    console.log(gigs);

    return (
        <div className="total-sales-wrapper">
            <div className="row">

                <div className="col-12">

                    <p className="enrolled-heading">
                        Total Gigs
                </p>

                </div>

            </div>

            <div className="row">
                <div className="gigs-wrapper">
                    <div className="gig">
                        {gigs
                            ? gigs.map((item, key) => { 
                                return <Gig item={item}/>

                            })
                            
                            : ''
                        }
                        {/* <Gig />
                        <Gig />

                        <Gig />

                        <Gig /> */}


                    </div>
                </div>
            </div>







        </div>
    );
};


let mapStateToProps = store => {
    console.log(store);

    return {
        gigs: store.FreelancerServices.gigs
    }
}



export default withRouter(connect(mapStateToProps, { getAllGigs })(TotalGigs))

