import React from 'react'
import styled from 'styled-components'
import { GiCook } from 'react-icons/gi'

const Nav = () => {
    return (
        <NavWrapper>

            <h1>Recipe <ChefIcon /> app</h1>

        </NavWrapper>
    )
}

export default Nav


const NavWrapper = styled.div`
width:100%;
height:50px;
font-family: 'Dancing Script', cursive;
display:flex;
justify-content:center;
align-items:center;

h1{
    text-transform:uppercase;
    margin:0;
    padding:0;
    color:red;
    display:flex;
    align-items:center;
}

`;

const ChefIcon = styled(GiCook)`
color:#fff;
height:40px;
width:30px;
`;