import react from 'react'
import MessageContainer from './MessageContainer'

class Room extends react.Component {
    constructor() {
        this.state = {
            message: []
        }
    }
    //fetch call to all the messages and store them in the state
    getMessageData() {
        //use a fectch get request to pull the data from the rails api to obatain the messages from the user
        fetch("https://localhost300.com/messages")
        .then(resp => resp.json())
        .then(json => this.setState({message: this.state.message.push(json[0])}))
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
    //this function will return the entire message of the message container and which will contain an individula message
    render() {
        return (
            <div>
                <MessageContainer messages={this.state.message} />
            </div>
        );
    }
}

export default Room;