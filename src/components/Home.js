import react from 'react'
import Room from './Room'

class Home extends react.Component {
    constructor() {
        this.state = {
            sender: {},
            reciever: {}
        }
    }

    getSender() {

    }

    getReciever() {

    }
    
    render() {
        return (
            <div>
                <p>HomePage</p>
                <Room />
            </div>
        );
    }
}

export default Home;