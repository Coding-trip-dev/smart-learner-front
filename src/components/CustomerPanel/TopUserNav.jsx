import React from 'react'
import './scss/order_management.scss'
import CustomerPanel from './CustomerPanel'

const UserNav = props => {


    return (

        <div>
            <ul className="nav nav-tabs tab-edit"
                id="myTab"
                role="tablist">
                <li className="nav-item">
                    <a className="nav-link active"
                        id="running-order-tab" data-toggle="tab" href="#running-order"
                        role="tab" aria-controls="running-order" aria-selected="true">Running</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link"
                        id="new-order-tab" data-toggle="tab" href="#new-order"
                        role="tab" aria-controls="new-order" aria-selected="false">New</a>
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
              

            </ul>
            <div className="tab-content p-0 tab-table"
                id="myTabContent">
                <div
                    className="tab-pane fade show active "
                    id="running-order"
                    role="tabpanel"
                    aria-labelledby="running-order-tab"
                >
                   {/* <CustomerPanel /> */}
                </div>
                <div
                    className="tab-pane fade"
                    id="new-order"
                    role="tabpanel"
                    aria-labelledby="new-order-tab">
                    {/* <NewOrder headings={newOrder} data={dataNewOrder} /> */}
                </div>
                <div
                    className="tab-pane fade"
                    id="completed-order"
                    role="tabpanel"
                    aria-labelledby="completed-order-tab">
                    {/* <CompletedOrder headings={completedOrder} data={dataCompletedOrder} /></div> */}
                    <div
                        className="tab-pane fade"
                        id="late"
                        role="tabpanel"
                        aria-labelledby="late-tab">
                        {/* <LateOrder headings={lateHeading} data={dataLateOrder} /> */}
                    </div>
                    <div
                        className="tab-pane fade"
                        id="canceled"
                        role="tabpanel"
                        aria-labelledby="canceled-tab">
                        {/* <CancelOrder headings={cancelOrder} data={dataCancelOrder} />  */}
                    </div>
                    <div
                        className="tab-pane fade"
                        id="revision"
                        role="tabpanel"
                        aria-labelledby="revision-tab">
                        {/* <Revision headings={revisionHeadings} data={revisionOrder} />  */}
                    </div>


                </div>
            </div>
        </div>
    )
}
export default UserNav