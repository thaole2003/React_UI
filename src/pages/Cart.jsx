import React from 'react'
import { Add, Remove } from "@material-ui/icons";
import styled from 'styled-components'
import NavBar from '../components/Navbar'
import Announcement from "../components/Anmouncement";
import Footer from "../components/Footer";
const Cart = () => {
    return (
        <Container>
            <NavBar />
            <Announcement />
            <div className='Wrapper'>
                <h1 className='title'></h1>
                <div className='Top'>
                    <TopButton className='topButton'>Continue Shopping</TopButton>
                    <div className='topTexts'>
                        <span className='topText'>Shopping Bag(2)</span>
                        <span className='topText'>Your Wishlist (0)</span>
                    </div>
                    <TopButton className='topButton' type="filled">CHECKOUT NOW</TopButton>
                </div>

                <div className='bottom'>
                    <div className='Info'>
                        <div className='products'>
                            <div className='ProductDetails'>
                                <img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" alt="" />
                                <div className='details'>
                                    <span className='ProductName'>
                                        <b>Product:</b> JESSIE THUNDER SHOES
                                    </span>
                                    <span className='ProductId'>
                                        <b>ID:</b> 93813718293
                                    </span>
                                    <ProductColor color="black" />
                                    <span className='ProductSize'>
                                        <b>Size:</b> 37.5
                                    </span>
                                </div>

                            </div>

                            <div className='PriceDetail'>
                                <div className='ProductAmountContainer'>
                                    <div className='Amount'>
                                        <Add />
                                        <div className='ProductAmount'>2</div>
                                        <Remove />
                                    </div>
                                    <div className='ProductPrice'>$ 20</div>
                                </div>
                            </div>

                        </div>
                        <hr />
                        <div className='products'>
                            <div className='ProductDetails'>
                                <img src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" alt="" />
                                <div className='details'>
                                    <span className='ProductName'>
                                        <b>Product:</b>  HAKURA T-SHIRT
                                    </span>
                                    <span className='ProductId'>
                                        <b>ID:</b> 93813718293
                                    </span>
                                    <ProductColor color="gray" />
                                    <span className='ProductSize'>
                                        <b>Size:</b> M
                                    </span>
                                </div>

                            </div>

                            <div className='PriceDetail'>
                                <div className='ProductAmountContainer'>
                                    <div className='Amount'>
                                        <Add />
                                        <div className='ProductAmount'>2</div>
                                        <Remove />
                                    </div>

                                    <div className='ProductPrice'>$ 20</div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='Summary'>
                        <h1 className='SummaryTitle'>ORDER SUMMARY</h1>
                        <SummaryItem>
                            <span className='SummaryItemText'>Subtotal</span>
                            <span className='SummaryItemPrice'>$ 80</span>
                        </SummaryItem>
                        <SummaryItem>
                            <span className='SummaryItemText'>Estimated Shipping</span>
                            <span className='SummaryItemPrice'>$ 5.90</span>
                        </SummaryItem>
                        <SummaryItem>
                            <span className='SummaryItemText'>Shipping Discount</span>
                            <span className='SummaryItemPrice'>$ 80</span>
                        </SummaryItem>
                        <SummaryItem>
                            <span className='SummaryItemText'>Total</span>
                            <span className='SummaryItemPrice'>$ 80</span>
                        </SummaryItem>
                        <button className='button'>
                            <a href='/success'>
                            CHECKOUT NOW
                            </a>
                        </button>
                    </div>

                </div>
            </div>
            <Footer />
        </Container>
    )
}

export default Cart
const Container = styled.div`
    .Wrapper{
        padding: 20px;
        @media only screen and (max-width: 380px) {
   padding: 10px;
}
        .title{
            font-weight: 300;
  text-align: center;
        }
        .Top{
            display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  .topTexts{

    .topText{
        @media only screen and (max-width: 380px) {
        display: none;
        }
        text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
    }
  }
        }
        .bottom{
            display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 380px) {
   flex-direction: column;
}
  .Info{
    flex: 3;
    hr{
        background-color: #eee;
  border: none;
  height: 1px;
    }
    .products{
        display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 380px) {
   flex-direction: column;
}
  .ProductDetails{
    flex: 2;
  display: flex;
  img{
    width: 200px;
  }
  .details{
    padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  }
  }
    }
    .PriceDetail{
        flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .ProductAmountContainer{
    display: flex;
  align-items: center;
  margin-bottom: 20px;

  @media only screen and (max-width: 380px) {
flex-direction: column;
}
.Amount{
    display: flex;
    align-items: center;
    padding: 5px;
    margin-right: 10px;
  border: solid 0.5px gray;
  border-radius: 30px;
  @media only screen and (max-width: 380px) {
margin: 5px;
}
    .ProductAmount{
    font-size: 24px;
  margin: 5px;

  @media only screen and (max-width: 380px) {
margin: 5px 15px;
}
  }

}
.ProductPrice{
    font-size: 30px;
  font-weight: 200;
  padding: 5px;
  border: solid 0.5px gray;
  border-radius: 30px;
  }
  }
    }
  }
        }
        .Summary{
            flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
  .SummaryTitle{
    font-weight: 200;
  }
  .button{
    width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  }
  
        }
    }
`

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
        props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
