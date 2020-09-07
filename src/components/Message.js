import react from 'react'

class Message extends react.Component {
    //will have to putput the infromation for each message
    render() {
        return (
            <div className="messageDiv">
                <p className="message">this.message.message</p>
                <p className="messageReciever">this.message.reciever_id</p>
                <p className="messageSender">this.message.sender_id</p>
            </div>
        )
    }
}

export default Message;