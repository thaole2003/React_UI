import React from 'react'
import styled from "styled-components";
import { categories } from '../data'
import CategoryItem from './Categoryitem'
const Categories = () => {
    return (
        <Container className='flex p-5 justify-between'>
            {
                categories.map(item => (
                    <CategoryItem key={item.id} item={item} />
                ))
            }
        </Container>
    )
}

export default Categories
const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  @media only screen and (max-width: 380px) {
    padding: 0;
     flex-direction: column
    }
`;
