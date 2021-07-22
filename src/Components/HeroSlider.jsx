import React from 'react'
import PropTypes from 'prop-types'

const HeroSlider = props => {
    const  data = props.data
    return (
        <div className ='hero-slider'>
            {data.map((value,index)=>(
                <div className="hero-slider__item">
                        {value.path}
                </div>


            ))}
        </div>
    )
}

HeroSlider.propTypes = {
    data:PropTypes.array.isRequired

}

export default HeroSlider
