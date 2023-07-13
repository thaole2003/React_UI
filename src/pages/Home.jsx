import React from 'react'
import NavBar from '../components/Navbar'
import Anmouncement from '../components/Anmouncement'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Newsleter from '../components/Newsleter'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <>
            <Anmouncement />
            <NavBar />
            <Slider />
            <Categories />
            <Products />
            <Newsleter />
            <Footer />
        </>
    )
}

export default Home