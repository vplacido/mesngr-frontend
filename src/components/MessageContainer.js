import react from 'react'
import Message from './Message'

class MessageContainer extends react.Component {
    mapMessages(messages) {
        messages.map(m => <Message message={m} />)
    }

    //will output an individual message and but will use Map Messages to map through all the messages
    render() {
        return (
            <div>
                {this.mapMessages()}
            </div>
        )
    }
}

export default MessageContainer;