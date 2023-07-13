import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';
const Footer = () => {

    return (
        <Container>
                   
            <div className='contentft'>
            <div className='left'>
                <h1 className='logo'>Clothes.</h1>
                <p className='desc'>
                We are a clothing store that specializes in providing stylish <br />
                and diverse fashion products for both men and women. <br /> With enthusiasm and passion for fashion, 
               <br /> we are committed to bringing you high quality products, fashion and style.
                </p>
                <div className='socialContainer'>
                    <SocialIcon color="3B5999"> <FacebookIcon /></SocialIcon>
                    <SocialIcon color="E4405F"><InstagramIcon /></SocialIcon>
                    <SocialIcon color="55ACEE"><TwitterIcon /></SocialIcon>
                    <SocialIcon color="E60023"><TelegramIcon /></SocialIcon>
                </div>
            </div>
           
            <div className='center'>
                <h3 className='title'>Contact</h3>
                <div className='list'>
                <div className='contactItem'><LocationOnIcon style={{ marginRight: "10px" }} />My Dinh , Nam Tu Liem</div>
                <div className='contactItem'><LocalPhoneIcon style={{ marginRight: "10px" }} /> +1 234 56 78</div>
                <div className='contactItem'><MailIcon style={{ marginRight: "10px" }} />lmthao.dev@gmail.com</div>
                <img src="https://i.ibb.co/Qfvn4z6/payment.png" />
                </div>
               
            </div>
            <div className='right'>
                <h3 className='title'>Address</h3>
                <div className='maps'>
      <iframe
        title="Google Map"
        width={450}
        height={200}
        src="https://www.google.com/maps/embed?..."
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
            </div>
            </div>
            <div className="top-footer">
        <div className="container">
            <div className="row">
            <div className="col-md-12">
                <p>&copy; 2023 Your Company. All rights reserved.</p>
            </div>
            </div>
        </div>
        </div>
        </Container>
    )
}

export default Footer
const Container = styled.div`
display: flex;
flex-direction: column;
@media only screen and (max-width: 380px) {
   flex-direction: column;
 
}
.top-footer {

  background-color: #f8f8f8;
  padding: 20px 20px;
  text-align: center;
}

.contentft{
    background-color: #fce6ff;
    padding: 10px;
    display: flex;
    justify-content: space-around;
    .left{
    flex:1;
    @media only screen and (max-width: 380px) {
   text-align: center;

}
    .desc{
        margin: 40px 0;
        font-weight: 300;
        font-size:small;
        color: gray;
    }
    .socialContainer{
        display: flex;
 
        
    }
}
.center{
    @media only screen and (max-width: 380px) {
        display: none;
    }
    flex:1;
    .title{ margin-bottom: 30px;}
    .list{
        margin: 0;
        padding: 0;
        list-style: none;
        .contactItem{
            padding-bottom: 15px;
            margin-top: 10px;
            align-items: center;
        }
    }
}
.right{
    @media only screen and (max-width: 380px) {
 background-color: #fff8f8;
}
    flex:1;
    .maps{
        padding-top: 30px;
        /* width: 70%;
        height: 70%; */
    }
}
}

`
const SocialIcon = styled.div`
cursor: pointer;
 width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${(props) => props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;
`
