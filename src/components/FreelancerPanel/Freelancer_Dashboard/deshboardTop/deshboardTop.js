import React, { useState } from "react";
import "./enrolled.scss";
import { withRouter } from 'react-router-dom'
import { connect, useSelector } from 'react-redux'


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


const FreelancerDetails = props => {

    const { setNewProfile } = props

    const [state, setState] = useState({

    })
    let user = useSelector(state=> state.auth.userDetail)

    console.log(user);
    
    return (    

        <div className="enrolled-wrapper">


            <div className="list-wrapper">
                {/* {students.map((item, index) => { */}
                     <li className="list-items" 
                    //  key={index}
                     >
                        <div className="img-wrapper">
                            <img src="https://www.understandingrelationships.com/wp-content/uploads/Fotolia_56809123_Subscription_Monthly_M.jpg" alt="" />
                        </div>
                        <div className="content-list-item">
                            <p className="name">
                                {user ? user.name : ""}
                            </p>
                            <p className="course-name">
                               Graphic Designer
                            </p>
                        </div>
                    </li>
                {/* })} */}

            </div>

        </div>
    );
};


// let mapStateToProps = store => {
//   console.log(store);

//   return {
//     userDetail: store.auth.userDetail
//   }
// }
// let mapDispatchToProps = dispatch => {
//   return {
//     // setNewProfile: (state, user) => {
//     //   dispatch(updateProfileInstructor(state, user))
//     // }
//   }
// }


export default withRouter(connect(null, {})(FreelancerDetails))

