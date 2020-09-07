import react from 'react'

class Login extends react.Component {

    checkLogin() {
        fetch("https://localhost300.com/messages")
        .then(resp => resp.json())
        .then(json => this.setState({message: this.state.message.push(json[0])}))
    }
    render() {
        return (
            <div>
                <form>
                    <input>Email</input>
                    <input type="submit"></input>
                </form>
            </div>
        )
    }
}

export default Login;