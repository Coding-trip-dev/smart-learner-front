import React, { useState } from "react";
import "./_viewOrder.scss";
import { connect, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Rating from "@material-ui/lab/Rating";
import { Link } from 'react-router-dom'
import { getRunningOrders } from '../../../../redux/actions/freelancer/orderAction'
import { getChat, replyByFreelancer, sendMsgByFreelancer } from '../../../../redux/actions/freelancer/chatAction'
// import { Launcher } from 'react-ch/at-window'


const ViewRunningOrder = props => {
    const { inProcessOrders, customer_id, getChat, allChat, replyByFreelancer, sendMsgByFreelancer } = props
    let id = useSelector(state => state.auth.user_id)

    const [expand, setExpand] = useState(false);
    const [chat, setChat] = useState(null);
    const [state, setState] = useState({
        channel_name: 'mohsin123',
        message: null,
        freelancer_id: id,

    });





    React.useEffect(() => {
        // setInterval(() => {
        getChat({ freelancer_id: id, customer_id: props.customer_id })

    }, [expand])
    React.useEffect(() => {
        setChat(allChat)
    }, [allChat])


    const expandArea = e => {
        setExpand(!expand)
    }

    const onChangeHandler = e => {
        let name = e.target.name
        let val = e.target.value

        setState({
            ...state,
            [name]: val
        })
    }

    const reply = e => {

        if (chat._id) {

            let newState = {
                ...state,
                customer_id: props.customer_id,
                thread: chat._id
            }

            replyByFreelancer(newState)

        }
        if (!chat._id) {
            let newState = {
                ...state,
                customer_id: props.customer_id,
                // thread: chat._id
            }
            sendMsgByFreelancer(newState)
        }
        document.getElementById("send-txt").value = ""
    }
    console.log(customer_id);

    return (
        <>

            <div className={expand ? `chat-box-wrapper-running` : `chat-box-wrapper-running hidden`}>
                <div className="header-section">
                    Chating Room
                </div>

                <div className="message-container">
                    <div className="message-wrapper">
                        {
                            chat
                                ?
                                chat.chat.map((item, key) => {
                                    if (item.sender === chat.customer_id) {
                                        return <div className="message-txt other-message">
                                            <img
                                                src={`http://18.217.77.0:5000/uploads/${chat.customer_picture}`}
                                                alt=""
                                                className="user-img"
                                            />
                                            <div className="message-time">

                                                <p className="time">
                                                    {chat.customer_name}
                                                </p>
                                                <p className="message">
                                                    {item.body}
                                                </p>
                                            </div>
                                        </div>

                                    }
                                    if (item.sender === chat.freelancer_id) {
                                        return <div className="message-txt your-message">
                                            <img
                                                src={`http://18.217.77.0:5000/uploads/${chat.freelancer_picture}`}
                                                // src="https://i1.wp.com/womenintech.je/wp-content/uploads/2017/01/avatar-round-1.png?ssl=1"
                                                alt=""
                                                className="user-img"
                                            />
                                            <div className="message-time">

                                                <p className="time">
                                                    {chat.freelancer_name}
                                                </p>
                                                <p className="message">
                                                    {item.body}
                                                </p>
                                            </div>
                                        </div>

                                    }

                                })
                                :
                                <>
                                    <div className="empty-message">
                                        Send a Message to start a chat
                                </div>
                                </>
                        }

                    </div>
                </div>
                <div className="new-message-container">
                    <input type="text" className="input-chat" onChange={onChangeHandler} name="message" id="send-txt" />
                    <button className="button-send" onClick={reply}> </button>
                </div>

            </div>
            <div className="areaExpand">
                {/* <button className="chat"
                onClick={expandArea}
              > */}
                <img
                    onClick={expandArea}
                    src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-and-shapes-1/177800/02-512.png" alt="" className="click_image" />
                {/* </button> */}
            </div>

        </>




    );
};


let mapStateToProps = store => {

    return {
        inProcessOrders: store.OrderReducer.runningOrder,
        allChat: store.ChatReducer.chatList
    }
}


export default withRouter(connect(mapStateToProps, {    
    getRunningOrders,
    getChat,
    replyByFreelancer,
    sendMsgByFreelancer
})(ViewRunningOrder))
