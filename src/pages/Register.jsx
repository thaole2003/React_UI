import React from 'react'
import styled from 'styled-components'
// import NavBar from '../components/navBar'
const Register = () => {
  return (
    <Container>

      <div className='wrapper'>
        <h1 className='title'>Register</h1>
        <form action="">
          <input type="text" placeholder='name' />
          <input type="text" placeholder='last name' />
          <input type="text" placeholder='username' />
          <input type="text" placeholder='email' />
          <input type="text" placeholder='password' />
          <input type="text" placeholder='confirm password' />
          <span className='Agreement'>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </span>
            <button className='button'>CREATE</button> 
           
         
        </form>
        <a href="/">
              RETURN HOME
            </a>
      </div>
    </Container>
  )
}

export default Register

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  .wrapper{
    width: 40%;
  padding: 20px;
  background-color: white;
  @media only screen and (max-width: 380px) {
   width: 75%;
  }
  .title{
    font-size: 24px;
  font-weight: 300
  }
  a{
    margin: 15px 0px 0px ;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  
  }
  a:hover{
    color: red;
  }
  form{
    display: flex;
  flex-wrap: wrap;
  input{
    flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  border-radius: 6px;
  border: 0.5px  solid;
  }
  .Agreement{
    font-size: 12px;
  margin: 20px 0px;
  }
  .button{
    width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  }
 
 

  }
  }
`