import React from 'react';



const Nav = ({navigation}) => {
    return (
        <nav>
            <ul>
                {
                    navigation.map(item => {
                        return <li key={item.id}>{item.title}</li>
                    })
                }
            </ul>
        </nav>
    )
}

export default Nav;