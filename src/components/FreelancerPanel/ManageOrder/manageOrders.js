import React, { useState, useEffect, } from 'react'
import './assets/order_management.scss'
import RunningOrder from './orders/RunningOrdersTable'
import NewOrder from './orders/newOrder'
import CompletedOrder from './orders/completedOrder'
import CancelOrder from './orders/cancelOrder'
import LateOrder from './orders/lateOrder'
import Revision from './orders/revisionOrder'
import { connect, useSelector } from 'react-redux'
import { getNewOrders, getRunningOrders, getCompleteOrders, getCanceledOrder } from '../../../redux/actions/freelancer/orderAction'

 

const array = [
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
    "Start Date",
    "DeliveredAt",
    "Total",
    "Reviews",
    "Status",
    // "Status",


]

const cancelOrder = [
    "Buyer Name & Order",
    "date",
    "Total",
    "Status",
    // "Status",


]
const lateHeading = [
    "Buyer Name & Order",
    "Start Date",
    "End Date",
    "DeliveredAt",
    "Total",
    "Status",
]
const revisionHeadings = [
    "Buyer Name & Order",
    "Order Description",
    "Order Date",
    "Revisions",
    "Status",


]

const dataLateOrder = [
    {
        name: 'Sarfraz Khan',
        img: 'https://i1.wp.com/womenintech.je/wp-content/uploads/2017/01/avatar-round-1.png?ssl=1',
        offer: 'Create my logo Design',
        startDate: '11-April',
        endDate: '11-May',
        deliverAt: '11-May',
        total: "$10",
        status: 'late',
    },
    {
        name: 'Sarfraz Khan',
        img: 'https://i1.wp.com/womenintech.je/wp-content/uploads/2017/01/avatar-round-1.png?ssl=1',
        offer: 'Create my logo Design',
        startDate: '11-April',
        endDate: '11-May',
        deliverAt: '11-May',
        total: "$10",
        status: 'late',
    },
    {
        name: 'Sarfraz Khan',
        img: 'https://i1.wp.com/womenintech.je/wp-content/uploads/2017/01/avatar-round-1.png?ssl=1',
        offer: 'Create my logo Design',
        startDate: '11-April',
        endDate: '11-May',
        deliverAt: '11-May',
        total: "$10",
        status: 'late',
    },


]
const revisionOrder = [
    {
        name: 'Sarfraz Khan',
        img: 'https://i1.wp.com/womenintech.je/wp-content/uploads/2017/01/avatar-round-1.png?ssl=1',
        offer: 'Create my logo Design',
        startDate: '11-May',
        total: "$10",
        status: 'pending',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae sunt porro doloribus consequuntur itaque enim laborum, neque ab animi repellendus vitae aliquid necessitatibus aut quibusdam, aliquam cum expedita dolorem omnis?'
    },
    {
        name: 'Sarfraz Khan',
        img: 'https://i1.wp.com/womenintech.je/wp-content/uploads/2017/01/avatar-round-1.png?ssl=1',
        offer: 'Create my logo Design',
        startDate: '11-May',
        total: "$10",
        status: 'completed',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae sunt porro doloribus consequuntur itaque enim laborum, neque ab animi repellendus vitae aliquid necessitatibus aut quibusdam, aliquam cum expedita dolorem omnis?'

    },
    {
        name: 'Sarfraz Khan',
        img: 'https://i1.wp.com/womenintech.je/wp-content/uploads/2017/01/avatar-round-1.png?ssl=1',
        offer: 'Create my logo Design',
        startDate: '11-May',
        total: "$10",
        status: 'pending',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae sunt porro doloribus consequuntur itaque enim laborum, neque ab animi repellendus vitae aliquid necessitatibus aut quibusdam, aliquam cum expedita dolorem omnis?'

    },

];


const ManageOrders = props => {

    const {
        getNewOrders,
        newOrders,
        getRunningOrders,
        inProcessOrders,
        getCompleteOrders,
        completedOrder,
        getCanceledOrder,
        canceledOrders

    } = props
    const [newOrder, setNewOrder] = useState([]);
    const [runningOrder, setRunningOrder] = useState([]);
    const [completedOrderArr, setCompletedOrderArr] = useState([]);
    const [cancelledOrderArray, setCancancelledOrderArray] = useState([]);

    let id = useSelector(state => state.auth.user_id)
    useEffect(() => {
        getNewOrders({ freelancer_id: "5ea153117fefa018306a3d70" })
        getRunningOrders({ freelancer_id: "5ea153117fefa018306a3d70" })
        getCompleteOrders({ freelancer_id: "5ea153117fefa018306a3d70" })
        getCanceledOrder({ freelancer_id: "5ea153117fefa018306a3d70" })

    }, [])


    useEffect(() => {
        setNewOrder(newOrders)
        setRunningOrder(inProcessOrders)
        setCompletedOrderArr(completedOrder)
        setCancancelledOrderArray(canceledOrders)
    }, [newOrders, inProcessOrders, completedOrder,canceledOrders])


    return (
        <div className="order-manage-wrapper">
            <div>
                <div className="row">
                    <div className="col-12">
                        <div className="order-manage-heading">
                            Manage Orders
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <ul className="nav nav-tabs tab-edit"
                    id="myTab"
                    role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active"
                            id="`new`-order-tab" data-toggle="tab" href="#new-order"
                            role="tab" aria-controls="new-order" aria-selected="false">New</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link "
                            id="running-order-tab" data-toggle="tab" href="#running-order"
                            role="tab" aria-controls="running-order" aria-selected="true">Running</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"
                            id="completed-order-tab" data-toggle="tab" href="#completed-order"
                            role="tab" aria-controls="completed-order" aria-selected="false">Completed</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"
                            id="late-tab" data-toggle="tab" href="#late"
                            role="tab" aria-controls="late" aria-selected="false">Late</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"
                            id="canceled-tab" data-toggle="tab" href="#canceled"
                            role="tab" aria-controls="canceled" aria-selected="false">Cancelled</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link"
                            id="revision-tab" data-toggle="tab" href="#revision"
                            role="tab" aria-controls="revision" aria-selected="false">Revisions</a>
                    </li>

                </ul>
                <div className="tab-content p-0 tab-table"
                    id="myTabContent">
                    <div
                        className="tab-pane fade "
                        id="running-order"
                        role="tabpanel"
                        aria-labelledby="running-order-tab"
                    >
                        <RunningOrder headings={array} data={runningOrder} /> 
                    </div>
                    <div
                        className="tab-pane fade show active"
                        id="new-order"
                        role="tabpanel"
                        aria-labelledby="new-order-tab">
                        <NewOrder headings={newOrderHeading} data={newOrder} />
                    </div>
                    <div
                        className="tab-pane fade"
                        id="completed-order"
                        role="tabpanel"
                        aria-labelledby="completed-order-tab">
                        <CompletedOrder headings={completedOrderHeading} data={completedOrderArr} /></div>
                    <div
                        className="tab-pane fade"
                        id="late"
                        role="tabpanel"
                        aria-labelledby="late-tab">
                        <LateOrder headings={lateHeading} data={dataLateOrder} />
                    </div>
                    <div
                        className="tab-pane fade"
                        id="canceled"
                        role="tabpanel"
                        aria-labelledby="canceled-tab">
                        <CancelOrder headings={cancelOrder} data={cancelledOrderArray} />
                    </div>
                    <div
                        className="tab-pane fade"
                        id="revision"
                        role="tabpanel"
                        aria-labelledby="revision-tab">
                        <Revision headings={revisionHeadings} data={revisionOrder} />
                    </div>


                </div>
            </div>
        </div>
    )
}
let mapStateToProps = state => {
    // console.log(state);

    return {
        newOrders: state.OrderReducer.newOrder,
        inProcessOrders: state.OrderReducer.runningOrder,
        completedOrder: state.OrderReducer.completedOrder,
        canceledOrders: state.OrderReducer.cancelledOrder
    }
}
export default connect(mapStateToProps, { getNewOrders, getRunningOrders, getCompleteOrders, getCanceledOrder })(ManageOrders)