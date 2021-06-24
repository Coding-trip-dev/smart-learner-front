import React, {useState} from "react";
import "./_discount_model.scss";
import Modal from "react-modal";
import {addDiscountOnCourse} from '../../../../redux/actions/instructor/discountAction'
import {connect} from 'react-redux'


const customStyles = {
  content: {
    top: "45%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

const ModalComp = ({ open, handleCloseModal,course,addDiscountOnCourse }) => {

const [newPrice , setNewPrice] = useState({
  percent: null,
  deductive_amount: null,
  new_price: null,
  your_earning: null,
  starting_date: null,
  ending_date: null
})



  let {english_tittle , price} = course
  
  const addDiscount = (e)=>{
    let name = e.target.name
    let val = e.target.value

    setNewPrice({
      ...newPrice,
      [name]: val
    })

    
    setTimeout(() => {

      let result = val/100 * price.origional_amount
      let new_amount = price.origional_amount - result
      let newEarning = 90/100 * new_amount

      setNewPrice({
        ...newPrice,
        deductive_amount: result.toFixed(2),
        new_price: new_amount.toFixed(2),
        your_earning : newEarning.toFixed(2)
      })
      

    }, 1000);
  }
  

  const pickDate = (e)=>{
    let name = e.target.name
    let val = e.target.value

    setNewPrice({
      ...newPrice,
      [name]: val
    })


  }

  const updateDiscount = ()=>{

    let data = {
      discount_price: Number(newPrice.deductive_amount),
      starting_date: newPrice.starting_date,
      ending_date: newPrice.ending_date,
      // course_id : course._id
      origional_amount: course.price.origional_amount,
      price_type: course.price.price_type
    }

    console.log(data);
    
    addDiscountOnCourse(course._id,data)

  }



  return (
    <Modal
      isOpen={open}
      contentLabel="onRequestClose Example"
      style={customStyles}
      ariaHideApp={false}
      shouldCloseOnOverlayClick={true}
      onClose={handleCloseModal}
      onEscapeKeyDown={handleCloseModal}
    >
      <div className="position-relative text-center modal-custom-auth-discount modal-auth-discount">
        <div className="model-custom-outer">

          <h4 className="type-discount model-heading-discount">
            Add Discount
           
          </h4>
          <span className="model-course-name">
            {english_tittle}
          </span>



          <div className="list-outer-discount">
            

          <ol className="left-list-discount-model"> 
            <li>Original Price</li>
            <li>Discount</li>
            <li>Select Date</li>
            <li>Deduct Amount</li>
            <li>New Price will be</li>
            <li><b>You will earn</b></li>
          </ol>

          <ol className="right-list-discount-model"> 
            <li>
                {
                  price ? 
                  price.origional_amount 
                  : 
                  "" 
                }$
            
            </li>
            <li>
              <input 
                type="number" 
                className="pick-date" 
                title="Discount price in %"
                name='percent' 
                onChange={addDiscount}
              /> %
            </li>
            <li>from &nbsp;
                <input 
                    type="date" 
                    className="pick-date" 
                    name="starting_date" 
                    onChange={pickDate}
                    title={newPrice.starting_date}
                 />
                &nbsp;
                to 
              &nbsp;
                <input 
                    type="date"
                    className="pick-date"
                    name="ending_date"
                    onChange={pickDate}
                    title={newPrice.ending_date}

                />
              </li>
            <li>{
                newPrice.deductive_amount 
                ? newPrice.deductive_amount 
                : 0
                 }$
            </li>
            <li>{
                newPrice.new_price 
                ? newPrice.new_price 
                : price 
                ? price.origional_amount 
                : '' 
                }$
            </li>
            <li>{
                newPrice.your_earning 
                ? newPrice.your_earning
                : price 
                ? (90/100 * price.origional_amount).toFixed(2) 
                : null 
                }$
              </li>
          </ol>

          </div>

            <button className="add-discount-button"
              onClick={updateDiscount}
            >
              Add Discount
            </button>

          <div className="close" onClick={handleCloseModal}>
            <span className="x">
              x
          </span>
          </div>
        </div>
      </div>
    </Modal>
  );
};



export default connect(null, {addDiscountOnCourse})(ModalComp)
