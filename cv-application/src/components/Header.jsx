import React, { Component } from "react";

class Header extends Component {
    render() {
        return (
            <header className="header">
                <h1 className="header-title">CV Creator</h1>
                <nav>
                    <li>Build</li>
                    <li>View</li>
                </nav>
            </header>
        );
    }
}

export default Header;
