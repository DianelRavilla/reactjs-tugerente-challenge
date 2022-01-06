import React, { Component } from 'react';
import logo from '../assets/images/logo512.png';

class Header extends Component {
    render() {
        return (
            <header className="page-header position-element">
                <section className="position-element left-header">
                    <span><img src={logo} className="page-header-img inline-element" /></span>
                    <span><a href=""><p className="inline-element">DIANEL RECORDS</p></a></span>
                </section>
                <section className="position-element right-header">
                    <span className="selected"><a href=""><p className="inline-element">HOME</p></a></span>
                    <span><a href=""><p className="inline-element">SERVICIOS</p></a></span>
                    <span><a href=""><p className="inline-element">CONTACTO</p></a></span>
                </section>
            </header>
        );
    }
}

export default Header;