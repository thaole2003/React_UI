import React from 'react'
import styled from 'styled-components'
const Anmouncement = () => {
    return (
        <Container>
            <p>Supper deal! Free shipping on order over 50$</p>
        </Container>
    )
}

export default Anmouncement
const Container = styled.div`
    height: 30px;
    background-color: teal;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color:white;
    font-size: 14px;
    font-weight: 500;
    @media only screen and (max-width: 380px) {
   
    }
`
