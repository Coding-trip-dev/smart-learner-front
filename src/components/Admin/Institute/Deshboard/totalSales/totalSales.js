import React, { useState } from "react";
import "./sales.scss";
import { withRouter } from 'react-router-dom'
import { connect, useSelector } from 'react-redux'
import { useEffect } from "react";
import { getInstituteSale } from '../../../../../redux/actions/institute/deshboard'

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


const TotalSales = props => {

    const { setNewProfile, sales, getInstituteSale } = props

    const [state, setState] = useState([])
    let id = useSelector(store => store.auth.user_id)
    let obj = {
        institute_id: id
    }
    useEffect(() => {
        getInstituteSale(obj)
    }, [])
    useEffect(() => {
        setState(sales)
    }, [sales])


    return (
        <div className="total-sales-wrapper">
            <div className="row">

                <div className="col-12">

                    <p className="enrolled-heading">
                        Total sales
                </p>

                </div>

            </div>

            <div className="sales-section">
                {/* <div className="row">
                    <div className="col-6">
                        <div className="row">
                            <div className="select-course">
                                <select name="" id="" className="select-topic-in-question"  >

                                    <option value="select topic">select course</option>
                                    <option value="select topic">1</option>
                                    <option value="select topic">2</option>
                                    <option value="select topic">3</option>


                                </select>
                            </div>
                            <div className="all-the-time">
                                <select name="" id="" className="select-topic-in-question"  >

                                    <option value="select topic">All the time</option>
                                    <option value="select topic">1</option>
                                    <option value="select topic">2</option>
                                    <option value="select topic">3</option>


                                </select>
                            </div>
                        </div>
                    </div>
                </div> */}

                <div className="showing-sales-section">

                    <div className="row">

                        {/* <div className="col-6"> */}
                        {/* <div className="left-section">
                                <p className='p'>Introduction to Chemistry</p>
                                <div className="row">

                                    <div className="col-4 sales">
                                        <p className="sales-text">Sales</p>
                                        <p className="sales-number">26</p>
                                    </div>
                                    <div className="col-4 earned">
                                        <p className="earned-text">earned</p>
                                        <p className="earned-amount">$395</p>

                                    </div>
                                    <div className="col-4 discount">
                                        <p className="discount-text">discount</p>
                                        <p className="discount-amount">$20</p>

                                    </div>
                                </div>
                            </div> */}
                        {/* </div> */}
                        <div className="col-8">
                            <div className="right-section">
                                <p className='p'>Overall Statistics</p>
                                <div className="row">

                                    <div className="col-4 sales">
                                        <p className="sales-text">Total Sales</p>
                                        <p className="sales-number">{state.length > 0 ? state[0].total_order : 0}</p>
                                    </div>
                                    <div className="col-4 earned">
                                        <p className="earned-text">total earned</p>
                                        <p className="earned-amount">${state.length > 0 ? state[1].total_earnings.toFixed(2) : 0}</p>

                                    </div>
                                    <div className="col-4 discount">
                                        <p className="discount-text">total discount</p>
                                        <p className="discount-amount">${state.length > 0 ? state[2].total_discount.toFixed(2) : 0}</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>





        </div>
    );
};


let mapStateToProps = store => {
    console.log(store);

    return {
        sales: store.InstituteDeshboard.sales,
    }
}

export default withRouter(connect(mapStateToProps, { getInstituteSale })(TotalSales))

