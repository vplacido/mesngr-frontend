import react from 'react'
import Room from './Room'

class Home extends react.Component {
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