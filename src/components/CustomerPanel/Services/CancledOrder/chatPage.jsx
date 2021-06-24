import React, { useState } from "react";
import "./_viewOrder.scss";
import { connect, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Rating from "@material-ui/lab/Rating";
import { Link } from 'react-router-dom'
import { getChat, replyByCustomer, sendMsgByFreelancer, sendNewMsg } from '../../../../redux/actions/customerPanel/chatAction'
// import { Launcher } from 'react-ch/at-window'


const ViewRunningOrder = props => {
    const { username, freelancer_id, getChat, allChat, replyByCustomer, sendMsgByFreelancer, sendNewMsg } = props
    let id = useSelector(state => state.auth.user_id)

    const [expand, setExpand] = useState(false);
    const [chat, setChat] = useState(false);
    const [state, setState] = useState({
        channel_name: 'mohsin123',
        message: null,
        freelancer_id: freelancer_id,

    });





    React.useEffect(() => {
        // setInterval(() => {
        getChat({ freelancer_id: freelancer_id, customer_id: id })


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
                freelancer_id: props.freelancer_id,
                thread: chat._id,
                customer_id: id
            }

            replyByCustomer(newState)

        }
        document.getElementById("send-txt").value = ""
    }


    const sendNewMessage = e => {
        let newState = {
            ...state,
            username,
            freelancer_id,
            customer_id: id
        }
        // console.log(newState);

        sendNewMsg(newState)
    }
    // console.log(username);

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
                                    if (item.sender === chat.freelancer_id) {
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
                                    if (item.sender === chat.customer_id) {
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
                    <button className="button-send" onClick={allChat === null ? sendNewMessage : reply}> </button>
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
        allChat: store.CustomerChatReducer.chatList
    }
}


export default withRouter(connect(mapStateToProps, {
    getChat,
    replyByCustomer,
    sendMsgByFreelancer,
    sendNewMsg
})(ViewRunningOrder))
