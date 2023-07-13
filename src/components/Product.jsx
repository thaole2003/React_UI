import React from 'react'
import styled from "styled-components";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;
const Product = ({ item }) => {
  return (
    <Container className=''>
      <Circle />

        
      {item.img && <img src={item.img} className="h-4/5 z-[2]" alt="" />}
      <a href={`/product/${item.id}`}>

      <Info className='info'>
        <Icon href='' className='icon'>
          <ShoppingCartOutlinedIcon />
        </Icon>
        <Icon className='icon'>
          <SearchOutlinedIcon />
        </Icon>
        <Icon className='icon'>
          <FavoriteBorderOutlinedIcon />
        </Icon>
      </Info>
      </a>

    </Container>
  )
}

export default Product

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  &:hover ${Info}{
    opacity: 1;
  }
`;

const Icon = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;
const Circle = styled.div`
      width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`
