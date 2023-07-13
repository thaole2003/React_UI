import React from 'react'
import styled from 'styled-components'

const Login = () => {
  return (
    <Container>
      <div className='wrapper'>
        <h1 className='title'>Login</h1>
        <form action="">
          <input type="text" placeholder='username' />
          <input type="text" placeholder='password' />
          <button className='button'>Login</button>
          <a href="">DO NOT YOU REMEMBER THE PASSWORD?</a>
          <a href="/register">CREATE A NEW ACCOUNT</a>
          <a href="/">RETURN HOME</a>
        </form>
      </div>
    </Container>
  )
}

export default Login

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  .wrapper{
    width: 25%;
  padding: 20px;
  background-color: white;
  @media only screen and (max-width: 380px) {
width: 75%;
}
  .title{
    font-size: 24px;
  font-weight: 300;
  }
  form{
    display: flex;
  flex-direction: column;
  input{
    flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
  border: 0.4px gray solid;
  border-radius: 7px;
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
  margin-bottom: 10px;
  }
  a{
    margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  }
  }
  }
  `