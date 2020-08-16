import react from 'react'
import Message from './Message'

class MessageContainer extends react.Component {
    mapMessages(messages) {
        messages.map(m => <Message message={m} />)
    }

    render() {
        return (
            <div>
                {this.mapMessages()}
            </div>
        )
    }
}

export default MessageContainer;