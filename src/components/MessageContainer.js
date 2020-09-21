import react from 'react'
import Message from './Message'

class MessageContainer extends react.Component {
    //function will loop through all the messages and output them
    mapMessages(messages) {
        messages.map(m => <Message message={m} />)
    }



    //will output an individual message and but will use Map Messages to map through all the messages
    render() {
        return (
            <div className="messageContainerDiv">
                {this.mapMessages()}
            </div>
        )
    }
}

export default MessageContainer;