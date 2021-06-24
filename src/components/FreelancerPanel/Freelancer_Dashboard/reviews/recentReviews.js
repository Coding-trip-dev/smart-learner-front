import React, { useState, Fragment } from "react";
import "./review.scss";
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Rating from "@material-ui/lab/Rating";


const review = [
  {
    name: "Umer Ahmad",
    time: '5 month ago',
    subject: "introduction to physics",
    rating: 5,
    desc: "After this course, it's all about us to use what we learn. I love the courses made it by chad. They are easy to follow, to understand to put in the applicaiton. I dont't recommend and I don't suggest but I order the others to really."
  },
  {
    name: "Umer Ahmad",
    time: '5 month ago',
    subject: "introduction to physics",
    rating: 5,
    desc: "After this course, it's all about us to use what we learn. I love the courses made it by chad. They are easy to follow, to understand to put in the applicaiton. I dont't recommend and I don't suggest but I order the others to really."
  },
  {
    name: "Umer Ahmad",
    time: '5 month ago',
    subject: "introduction to physics",
    rating: 5,
    desc: "After this course, it's all about us to use what we learn. I love the courses made it by chad. They are easy to follow, to understand to put in the applicaiton. I dont't recommend and I don't suggest but I order the others to really."
  },


]


const Reviews = props => {

  const { setNewProfile } = props

  const [state, setState] = useState({

  })

  return (
    <div className="reviews-wrapper">
      <div className="enrolled-outing">
        <p className="enrolled-heading">
          Recent Reviews
        </p>
        <select name="" id="" className="select-topic-in-question"  >

          <option value="select topic">Last Month</option>
          <option value="select topic">January</option>
          <option value="select topic">Februrary</option>
          <option value="select topic">March</option>


        </select>
      </div>

      <div className="row">
        {
          review.map((item, key) => {

         
       return <Fragment key={key} >
         
          <div className="col-4 left_wrapper_reviews">
            <div className="img-wrapper-reviews">
              <img src="https://storage.googleapis.com/media.helloumi.com/channels/N0SIDN1DSP7ZU7DPGDEFWI0U121XSF9D.png" alt="" />
            </div>
            <div className="content-list-item">
              <p className="name">
                {item.name}
              </p>
              <p className="time">
                {item.time}
              </p>

            </div>
          </div>
          <div className="col-8 right_wrapper_reviews">
            <Rating className="star" value={item.rating} readOnly />
            <div className="subject-name">
              {item.subject}
          </div>
            <div className="description-course">
              {item.desc}
            </div>

          </div>

        </Fragment>
 })
}
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


export default withRouter(connect(null, {})(Reviews))

