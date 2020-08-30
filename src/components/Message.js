import react from 'react'

class Message extends react.Component {
    //will have to putput the infromation for each message
    render() {
        return (
            <div>
                <p>this.message.message</p>
                <p>this.message.reciever_id</p>
                <p>this.message.sender_id</p>
            </div>
        )
    }
}

export default Message;