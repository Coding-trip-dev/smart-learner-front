import React, { useState, useEffect } from "react";
import "./_deshboard-freelancer.scss";
import { withRouter } from 'react-router-dom'
import { connect, useSelector } from 'react-redux'
import FreelancerDetails from './deshboardTop/deshboardTop'
import Reviews from './reviews/recentReviews'
import RunningOrder from './studentQueryTable'
import NewOrder from './newOrder'
import CompletedOrder from './completedOrder'
import CancelOrder from './cancelOrder'

import MoreVertIcon from '@material-ui/icons/MoreVert';
import Rating from "@material-ui/lab/Rating";
import TotalGigs from './totalSales/totalSales'
import DashboardCard from "../common/DashoardCard/DashboardCard";
import GroupAddIcon from '../assets/group-add.png'
import GroupIcon from '../assets/group.png'
import CoinStack from '../assets/coins.png'


import { getNewOrders, getRunningOrders, getCompleteOrders, getCanceledOrder, getTopDetails } from '../../../redux/actions/freelancer/orderAction'


const arrayHeading = [
    "Buyer Name & Order",
    "Start Date",
    "Total",
    "Status",
    "Timmer",


]
const newOrderHeading = [
    "Buyer Name & Order",
    "Order Description",
    "Start Date",
    "Total",
    "Status",


]
const completedOrderHeading = [
    "Buyer Name & Order",
    "DeliveredAt",
    "Total",
    "Status",
    // "Status",


]

const cancelOrderHeading = [
    "Buyer Name & Order",
    "date",
    "Total",
    "Status",
    // "Status",


]

const FreelancerDeshboard = props => {


    const {
        getNewOrders,
        newOrders,
        getRunningOrders,
        inProcessOrders,
        getCompleteOrders,
        completedOrder,
        getCanceledOrder,
        canceledOrders,
        setNewProfile,
        getTopDetails,
        topDetails
    } = props

    const [details, setDetails] = useState({

    })


    const [newOrder, setNewOrder] = useState([]);
    const [runningOrder, setRunningOrder] = useState([]);
    const [completedOrderArr, setCompletedOrderArr] = useState([]);
    const [cancelledOrderArray, setCancancelledOrderArray] = useState([]);

    let id = useSelector(state => state.auth.user_id)
    useEffect(() => {
        getNewOrders({ freelancer_id: id })
        getRunningOrders({ freelancer_id: id })
        getCompleteOrders({ freelancer_id: id })
        getCanceledOrder({ freelancer_id: id })
        getTopDetails({ freelancer_id: id })

    }, [])


    useEffect(() => {
        setNewOrder(newOrders)
        setRunningOrder(inProcessOrders)
        setCompletedOrderArr(completedOrder)
        setCancancelledOrderArray(canceledOrders)
        setDetails(topDetails)
    }, [newOrders, inProcessOrders, completedOrder, canceledOrders, topDetails])



console.log(details);

    return (
        <div className="deshboard-wrapper-freelancer">
            <div className="row"> 
                <div className="col-5">
                    <FreelancerDetails />
                </div>

            </div>
            <div className="query-table-section">

                <div className="student-query-head-section-freelancer">
                    <div className="row">
                        <div className="col-10 ">
                            <p className="student-heading">Deshboard </p>
                        </div>
                        <div className="col-2">
                            <select name="" id="" className="select-topic-in-question"  >

                                <option value="select topic">Last Month</option>
                                <option value="select topic">1</option>
                                <option value="select topic">2</option>
                                <option value="select topic">3</option>


                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <DashboardCard
                    type="total-students"
                    title="total orders"
                    count={details[2] ? details[2].total_orders : 0}
                    image={GroupAddIcon}
                    />
                <DashboardCard
                    type="total-courses"
                    title="completed orders"
                    // count="50"
                    count={details[2] ? details[0].completed_orders : 0}
                    image={GroupIcon}
                    />
                <DashboardCard
                    type="total-sales"
                    title="total earning"
                    count={details[1] ? details[1].total_earnings : 0}
                    // count="$1,150"
                    image={CoinStack}
                />
            </div>




            <div className="row">
                <RunningOrder headings={arrayHeading} data={runningOrder} />
            </div>


            <div className="row">
                <NewOrder headings={newOrderHeading} data={newOrder} />
            </div>
            <div className="row">
                {/* completed orders */}
                <div className="col-6">
                    <CompletedOrder headings={completedOrderHeading} data={completedOrderArr} />

                </div>
                <div className="col-6">
                    <CancelOrder headings={cancelOrderHeading} data={cancelledOrderArray} />

                </div>
            </div>

            <TotalGigs /> 






        </div>
    );
};


let mapStateToProps = store => {
    console.log(store);

    return {
        newOrders: store.OrderReducer.newOrder,
        inProcessOrders: store.OrderReducer.runningOrder,
        completedOrder: store.OrderReducer.completedOrder,
        canceledOrders: store.OrderReducer.cancelledOrder,
        topDetails: store.OrderReducer.topDetails,
    }
}
// let mapDispatchToProps = dispatch => {
//   return {
//     // setNewProfile: (state, user) => {
//     //   dispatch(updateProfileInstructor(state, user))
//     // }
//   }
// }


export default withRouter(connect(mapStateToProps, { getNewOrders, getRunningOrders, getCompleteOrders, getTopDetails, getCanceledOrder })(FreelancerDeshboard))

