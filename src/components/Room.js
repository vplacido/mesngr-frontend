import react from 'react'

class Room extends react.Component {
    constructor() {
        this.state = {
            message: {}
        }
    }

    getMessageData() {
        //use a fectch get request to pull the data from the rails api to obatain the messages from the user
    }

    getRecieverData() {
        //use another fetch get method to obtain the information of the person recieving the message
    }

    getSenderData() {
        //use the fetch get method to pull the information from the person sending the message
    }

    sendNewMessage() {
        //use the fetch post method to create a new message sent from the sender
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default Room;