import react from 'react'
import Room from './Room'

class Home extends react.Component {
    constructor() {
        this.state = {
            sender: [],
            reciever: []
        }
    }
    //fetch call to get the sender infromation from the api
    getSender() {
        fetch("https://localhost3000.com/sender")
        .then(resp => resp.json())
        .then(json => this.setState({sender: json[0]}))
    }
    //fetch call to get the infromation from the sender
    getReciever() {
        fetch("https://localhost3000.com/reciever")
        .then(resp => resp.json())
        .then(json => this.setState({reciever: json[0]}))
    }

    render() {
        return (
            <div>
                <p>HomePage</p>
                <button onClick={this.getSender}>Click Me For Sender!</button>
                <button onClick={this.getReciever}>Click Me For Reciever!</button>
                <Room sender={this.state.sender} reciever={this.state.reciever} />
            </div>
        );
    }
}

export default Home;