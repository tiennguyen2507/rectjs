import React from 'react'

import Helmet from '../Components/Helmet'
import HeroSlider from '../Components/HeroSlider'
import heroSliderData from '../assets/fake-data/hero-slider'

const Home = () => {
    return (
        <Helmet title={'trang chủ'}>
            {/* start {hero Slider} */}
            <HeroSlider data={heroSliderData} control={true} auto={false} timeout={5000} />
            {/* end {hero Slider} */}
        </Helmet>
    )
}

export default Home
