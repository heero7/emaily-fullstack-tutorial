import React, { Component } from 'react';


class Header extends Component {
    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <a className="left brand-log"><h4>Emaily</h4></a>
                    <ul className="right">
                        <li>
                            <a>Login With Google</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;