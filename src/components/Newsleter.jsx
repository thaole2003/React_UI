import React from 'react'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import styled from 'styled-components';
const Newsleter = () => {
    return (
        <Container className='Container'>
            <h1 className='title'>News Letter </h1>
            <div className='description'>Get timely updates your favorites products.</div>
            <div className='inputContainer'>
                <input className='input' type="text" placeholder='Your email' />
                <button className='button'> <SendOutlinedIcon /></button>
            </div>
        </Container>
    )
}

export default Newsleter
const Container = styled.div`
height: 60vh;
background-color: wheat;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
@media only screen and (max-width: 380px) {
   text-align: center;
}
.title{
   font-weight: 700;
   font-size: 70px;
   padding-bottom: 20px;
}
.description{
    font-size: 24px;
    padding-bottom: 20px;
    font-weight: 300;
    @media only screen and (max-width: 380px) {
   text-align: center;
}
}
.inputContainer{
    
    width: 50%;
    height: 40px;
    display: flex;
    background-color: wheat ;
    border: 0.5px solid gray;
    justify-content: space-between;
    @media only screen and (max-width: 380px) {
   width: 80%;
}
    .input{
   

        flex:8;
    }
    .button{

        background-color: lightgreen;
        flex:2;
    }
}
`
