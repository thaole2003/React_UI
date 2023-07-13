import React from 'react'
import styled from 'styled-components'
import NavBar from '../components/Navbar'
import Announcement from "../components/Anmouncement";
import Products from "../components/Products";
import Newsletter from "../components/Newsleter";
import Footer from "../components/Footer";


const ProductList = () => {
    return (
        <Container>
            <NavBar />
            <Announcement />
            <h1 color='title'></h1>
            <div className='FilterContainer'>
                <div className='Filter'>
                    <span className='FilterText'>Filter Products:</span>
                    <select className='select'>
                        <option disabled selected>
                            Color
                        </option>
                        <option>White</option>
                        <option>Black</option>
                        <option>Red</option>
                        <option>Blue</option>
                        <option>Yellow</option>
                        <option>Green</option>
                    </select>
                    <select className='select'>
                        <option disabled selected>
                            Size
                        </option>
                        <option>xs</option>
                        <option>s</option>
                        <option>m</option>
                        <option>l</option>
                        <option>xl</option>
                    </select>
                </div>
                <div className='Filter'>
                    <span className='FilterText'>Sort Products:</span>
                    <select className='select'>
                        <option selected>Newest</option>
                        <option>Price (asc)</option>
                        <option>Price (desc)</option>
                    </select>
                </div>
            </div>
            <Products />
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default ProductList
const Container = styled.div`
.FilterContainer{
    display: flex;
  justify-content: space-between;
  .Filter{
    margin: 20px;
    @media only screen and (max-width: 380px) {
   width: 0px 20px;
   display: flex;
   flex-direction: column;
}
    .FilterText{
        font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  @media only screen and (max-width: 380px) {
   margin-right: 0px;
}
    }
    .select{
        padding: 10px;
  margin-right: 20px;
  @media only screen and (max-width: 380px) {
   margin: 10px 0px;
}
    }
  }
}
`