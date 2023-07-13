import React,{useState} from 'react'
import { Add, Remove } from "@material-ui/icons";
import styled from 'styled-components'
import NavBar from '../components/Navbar'
import Announcement from "../components/Anmouncement";
import Newsletter from "../components/Newsleter";
// import { mobile } from "../responsive";
import Footer from "../components/Footer";
const Product = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };
  return (
    <Container>
      <NavBar />
      <Announcement />
      <div className='wrapper'>
        <div className='imgContainer'>
          <img src="https://i.ibb.co/S6qMxwr/jean.jpg" alt="" />
        </div>
        <div className='infoContainer'>
          <h1 className='title'>Denim Jumpsuit</h1>
          <p className='desc'>   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.</p>
          <span className='price'>$ 20</span>
          <div className='FilterContainer'>
            <div className='filter'>
              <span className='FilterTitle'> Color</span>
              <FilterColor className='FilterColor' color='black'></FilterColor>
              <FilterColor className='FilterColor' color='darkblue'></FilterColor>
              <FilterColor className='FilterColor' color="gray"></FilterColor>

            </div>
            <div className='filter'>
              <span className='FilterTitle'> Size</span>
              <select className='filterSize'>
                <option>XS</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
            </div>
          </div>
          <div className='AddContainer'>
            <div className='AmountContainer'>
              <Remove onClick={() => handleQuantity("dec")} />
              <span className='Amount'>{quantity}</span>
              <Add onClick={() => handleQuantity("inc")} />
            </div>
            <button className='button'>ADD TO CART</button>
          </div>

        </div>
      </div>
      <Newsletter />
      <Footer />
    </Container >
  )
}

export default Product
const Container = styled.div`
.wrapper{
    padding: 50px;
  display: flex;
  @media only screen and (max-width: 380px) {
   flex-direction: column;
   padding: 10px;
}
  .imgContainer{
    flex: 1;
    .images{
        width: 100%;
  height: 90vh;
  object-fit: cover;
  @media only screen and (max-width: 380px) {
height:40vh;
}
    }
  }
  .infoContainer{
    flex: 1;
  padding: 0px 50px;
  @media only screen and (max-width: 380px) {
   padding: 10px;
  }
.title{
  font-size: 30px;
  font-weight: bold;
color: black;
}
.desc{
    margin: 20px 0px;
    color: gray;
}
.price{
    font-weight: 100;
  font-size: 40px;
}
.FilterContainer{
    width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 380px) {
   width: 100%;
  }
  .filter{
    display: flex;
  align-items: center;
    .FilterTitle{
        font-size: 20px;
  font-weight: 200;
    }
    /* .FilterColor{
        width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
    } */
    .filterSize{
        margin-left: 10px;
  padding: 5px; 
    }
  }
}
.AddContainer{
    width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 380px) {
   width: 100%;
  }
  .AmountContainer{
    display: flex;
  align-items: center;
  font-weight: 700;
  .Amount{
    width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
  }
  }
}
.button{
    padding: 15px;
  border: 2px solid teal;
  border-radius: 40px;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: red;
  } 
}
  }
}
`
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;
