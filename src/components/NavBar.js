import React from 'react'

class NavBar extends React.Component {

    render() {
        return (
            <div>
                <button>Home</button>
                <ol>
                    <li>
                        <button>Room</button>
                        <button>Sign Out</button>
                    </li>
                </ol>
            </div>
        )
    }
}

export default NavBar;