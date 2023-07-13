import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search'
import Badge from '@mui/material/Badge';
// import Register from '../pages/Register';
// import Login from '../pages/Login';
// import MailIcon from '@mui/icons-material/Mail';
import Menu from '@mui/icons-material/Menu';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
// import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <Container className='nav_Container'>
            <Wrapper >
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input />

                        <SearchIcon className='cursor-pointer' style={{ color: "gray", fontSize: 16 }} />
                    </SearchContainer>
                </Left>
                <Center href="/"><Logo >FASHION CLOTHES.</Logo></Center>
                <Right className='flex gap-5'>
                    <Menu className='menu' />

                    <MenuIcon href='/register'>Register</MenuIcon>
                    <MenuIcon href='/login'>Login</MenuIcon>
                    <MenuIcon href="/cart">
                        <Badge badgeContent={4} color="secondary">
                            <ShoppingCartOutlinedIcon color="action" />
                        </Badge>
                    </MenuIcon>
                </Right>
            </Wrapper>

        </Container >



    )
}

export default NavBar

const Container = styled.div`
height: 60px;
@media only screen and (max-width: 380px) {
   height: 50px;

}
`

const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
justify-content: space-between;
@media only screen and (max-width: 380px) {
   padding: 10px 0px;

}
`
const Left = styled.div`
display: flex;
flex: 1;
align-items:center;
`
const Center = styled.a`
flex:1
`
const Right = styled.div`
flex :1;
justify-content: flex-end;
align-items: center;
.menu{
    @media only screen and (min-width: 380px) {
display: none;
}


}
@media only screen and (max-width: 380px) {
   flex:2;
   justify-content: center;

}
`
const Language = styled.span`
font-size: 14px;
cursor: pointer;
@media only screen and (max-width: 380px) {
   display: none;
};
`
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    align-items: center;
    border-radius:20px ;
    margin-left: 25px;
    padding: 5px;
    @media only screen and (max-width: 380px) {

   display: none;
}
`
const Input = styled.input`
    border: none;
  
`
const Logo = styled.h1`
text-align: center;
cursor: pointer;
font-weight: bold;
@media only screen and (max-width: 380px) {
 font-size  :24px ;
}
`
const MenuIcon = styled.a`
    font-size: 14px;
    cursor: pointer;
    @media only screen and (max-width: 380px) {
display: none;
}
`