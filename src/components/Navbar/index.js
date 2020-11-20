import React from 'react';
import { StyledNav } from './style';
import Burger from '../Burger/index';

const Navbar = () => {
    return (
        <StyledNav>
            <div className="logo">
                Nav Bar
            </div>
            <Burger />
        </StyledNav>
    )
}
export default Navbar