import React from 'react'
import styled from "styled-components";

const CategoryItem = ({ item }) => {
    return (
        <Container className='m-[3px] h-[70vh] relative'>
            <a href={`/products/${item.cat}`}>

            <img className='w-full h-full object-cover' src={item.img} alt="" />
            <div className='absolute w-full h-full top-0 left-0 justify-center items-center flex flex-col' >
                <h1 className='text-white mb-5'>{item.title} </h1>
                <button className=' rounded-2xl bg-slate-300 p-2 hover:bg-blue-500 hover:text-white' >SHOW NOW</button>
            </div>
            </a>
          
        </Container>
    )
}

export default CategoryItem
const Container = styled.div`
img{
    @media only screen and (max-width: 380px) {
   height: 50vh;
}
}    

`
