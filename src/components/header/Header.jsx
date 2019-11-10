import React from 'react';

import Nav from './nav/Nav';

class Header extends React.Component {
    render() {
        console.log(this.props)
        return (
            <header>
               <Nav navigation={this.props.navigation} />
            </header>
        )
    }
}

export default Header;