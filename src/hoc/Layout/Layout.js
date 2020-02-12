import React, { Component } from 'react';
import classes from './Layout.css';
import MenuToggle from '../../components/Navigation/MenuToggle/MenuToggle';
import Drawer from '../../components/Navigation/Drawer/Drawer';
import Backdrop from '../../UI/Backdrop/Backdrop'

class Layout extends Component {

    state = {
      menu: false,
      showBackdrop: false
    };
    toggleMenuHandler = () => {
        this.setState({
            menu: !this.state.menu,
            showBackdrop: !this.state.showBackdrop
        })
    };

    render() {
        return(
            <div className={classes.Layout}>
                { this.state.showBackdrop
                ? <Backdrop
                        onToggle={this.toggleMenuHandler}
                    />
                    : null
                }
                <Drawer
                    isOpen={this.state.menu}
                    onToggle={this.toggleMenuHandler}
                />
                <MenuToggle
                    onToggle={this.toggleMenuHandler}
                    isOpen={this.state.menu}
                />

                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default Layout