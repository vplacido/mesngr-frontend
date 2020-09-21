import React from 'react'

class NavBar extends React.Component {
    //will show the navbar and buttons to sign out and login
    render() {
        return (
            <div className="navBar">
                <button className="navHomeBut">Home</button>
                <ol className="navBarList">
                    <li>
                        <button className="navBarListRoomBut">Room</button>
                        <button className="navBarListSignOutBut">Sign Out</button>
                    </li>
                </ol>
            </div>
        )
    }
}

export default NavBar;