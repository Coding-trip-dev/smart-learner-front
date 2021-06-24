import React, { Fragment, useState } from "react";
import "./scss/_timedown.scss";
import Countdown from "react-countdown";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Modal from './Modal'




const Renderer = ({ user}) => {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };
  const handleCloseModal = () => {
    setOpen(false);
  };
  return (
    <Fragment>

      <Modal
        open={open}
        handleCloseModal={handleCloseModal}
        course={user}
      />
      <div className="time-box position-relative">
        <h3>Price ${user ? (user.origional_price - user.discount_price): ''} <span className="original-amnt">${user ? user.origional_price: ''}</span></h3>
        <div className="row">
          <div className="col-12 timer-entity">

            <Countdown
              date={Date.now() + 500000000}
            />
          </div>
          {/* <div className="col-3 timer-entity"><span>{days}</span><span className="entity">Days</span></div>
          <div className="col-3 timer-entity"><span>{hours}</span><span className="entity">Hrs</span></div>
          <div className="col-3 timer-entity"><span>{minutes}</span><span className="entity">Mins</span></div>
          <div className="col-3 timer-entity"><span>{seconds}</span><span className="entity">Secs</span></div> */}
        </div>
        <div className="discount">
        {user ? (Math.floor((user.discount_price / user.origional_price) * 100)) : ""}% OFF
        </div>
      </div>
      {/* <Countdown
        date={Date.now() + 500000000}
      /> */}
      <div className="btn-div">
        <button className="btn mt-1"><AddShoppingCartIcon /> <span>Add to Cart</span></button><br />
        <button className="btn btn-buy mt-1" onClick={openModal}>Buy Now</button>
      </div>
    </Fragment>
  );
};

// const TimeDown = props => {


//   return (
//     <div>
//       <Countdown
//         date={Date.now() + 500000000}
//         renderer={renderer}
//         handleCloseModal={handleCloseModal}
//         openModal={openModal}
//         open={open}
//       />
//     </div>
//   )
// }
export default Renderer;
