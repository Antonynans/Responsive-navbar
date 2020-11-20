import React from 'react';
import { StyledRightNav } from './style';

const RightNav = ({ open }) => {
    return (
        <StyledRightNav open={open}>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Sign In</li>
            <li>Sign up</li>
        </StyledRightNav>
    )
}
export default RightNav