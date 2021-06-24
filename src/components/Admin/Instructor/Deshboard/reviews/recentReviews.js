import React, { useState, Fragment } from "react";
import "./review.scss";
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Rating from "@material-ui/lab/Rating";
import * as routes from '../../../../../constants/routePaths'

// const review = [
//   {
//     name: "Umer Ahmad",
//     time: '5 month ago',
//     subject: "introduction to physics",
//     rating: 5,
//     desc: "After this course, it's all about us to use what we learn. I love the courses made it by chad. They are easy to follow, to understand to put in the applicaiton. I dont't recommend and I don't suggest but I order the others to really."
//   },
//   {
//     name: "Umer Ahmad",
//     time: '5 month ago',
//     subject: "introduction to physics",
//     rating: 5,
//     desc: "After this course, it's all about us to use what we learn. I love the courses made it by chad. They are easy to follow, to understand to put in the applicaiton. I dont't recommend and I don't suggest but I order the others to really."
//   },
//   {
//     name: "Umer Ahmad",
//     time: '5 month ago',
//     subject: "introduction to physics",
//     rating: 5,
//     desc: "After this course, it's all about us to use what we learn. I love the courses made it by chad. They are easy to follow, to understand to put in the applicaiton. I dont't recommend and I don't suggest but I order the others to really."
//   },


// ]


const Reviews = props => {

  const { setNewProfile, reviews } = props

  const [state, setState] = useState({

  })
  console.log(reviews);

  return (
    <div className="reviews-wrapper">
      <div className="enrolled-outing">
        <p className="enrolled-heading">
          Recent Reviews
        </p>
        <Link className="link" to={routes.ViewAllReviewsInstructor}>
          See All
        </Link>
      </div>

      <div className="row">
        {reviews.length > 0 ?
          reviews.map((item, key) => {


            return <Fragment key={key} >

              <div className="col-4 left_wrapper_reviews">
                <div className="img-wrapper-reviews">
                  <img src={`/uploads/${item.customer ? item.customer.customer_picture : null}`} alt="User Pic" />
                </div>
                <div className="content-list-item">
                  <p className="name">
                    {item.customer ? item.customer.customer_name : null}
                  </p>
                  <p className="time">
                    {item.created_at ? item.created_at.slice(0, 10) : null}
                  </p>

                </div>
              </div>
              <div className="col-8 right_wrapper_reviews">
                <Rating className="star" value={item.star ? item.star : null} readOnly />
                <div className="subject-name">
                  {/* {item.subject */}
                  Chemistry
                </div>
                <div className="description-course">
                  {item.review ? item.review : null}

                </div>

              </div>

            </Fragment>
          }) : <Fragment>

          <div className="col-8 left_wrapper_reviews">
            
            <div className="content-list-item">
              <p className="name">
               Start working to get Rating
              </p>
             

            </div>
          </div>
        

        </Fragment>
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

