import React, { Component } from 'react';
import classes from './Drawer.css';
import {NavLink} from 'react-router-dom';


const links = [
    {to: '/',label: 'Quiz list', exact: true },
    {to: '/auth',label: 'Authorization', exact: false },
    {to: '/quiz-creator',label: 'Create your own test', exact: false }

];

class Drawer extends Component {

    renderLinks() {
        return links.map((link, index) => {
                return (
                    <li key={index}>
                        <NavLink
                            to={link.to}
                            exact={link.exact}
                            activeClassName={classes.active}
                            onClick={this.props.onToggle}
                        >
                            {link.label}
                        </NavLink>
                    </li>
                    )
            })

    }

    render(){
        const cls = [
            classes.Drawer
        ];
        if ( !this.props.isOpen) {
            cls.push(classes.close);
        }

        return(
            <nav className={cls.join(' ')}>
                <ul>
                    {
                        this.renderLinks()
                    }
                </ul>
            </nav>
        )
    }
}

export default Drawer;