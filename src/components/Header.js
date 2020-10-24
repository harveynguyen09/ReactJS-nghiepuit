import React, { Component } from 'react';
import '../App.css'


class Header extends Component {
    render() {
        var a = 5;
        var b = 10;
        var user = {
            id: 123,
            name: 'hung',
            height: '1m70'
        }
        return (
            <div>
                <nav className="navbar navbar-inverse">
                    <a className="navbar-brand" href="#">Title</a>
                    <ul className="nav navbar-nav">
                        <li className="active">
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Link</a>
                        </li>
                    </ul>
                </nav>
                <div className='ml-30'>
                    <div>{a}</div>
                    <div>{a + b}</div>
                    <ul>
                        <li>ID: {user.id}</li>
                        <li>Name: {user.name}</li>
                        <li>Height: {user.height}</li>
                    </ul>
                </div>
            </div>

        );
    }
}

export default Header;
