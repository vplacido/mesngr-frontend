import react from 'react'
import Room from './Room'

class Home extends react.Component {
    constructor() {
        this.state = {
            sender: [],
            reciever: []
        }
    }

    getSender() {
        fetch("https://localhost3000.com/sender")
        .then(resp => resp.json())
        .then(json => this.state.sender = json[0])
    }

    getReciever() {
        fetch("https://localhost3000.com/reciever")
        .then(resp => resp.json())
        .then(json => this.state.reciever = json[0])
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