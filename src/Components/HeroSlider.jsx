import React,{useState} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const HeroSlider = props => {
    const data = props.data
    const [activeSlide, setactiveSlide] = useState(0)
    const nextslider = ()=>{
        const index  = activeSlide +1 == data.length ? 0 : activeSlide +1
        setactiveSlide(index)
    }
    const prevslider = ()=>{
        const index  = activeSlide -1 < 0 ? data.length -1 : activeSlide -1
        setactiveSlide(index)
    }

    return (
        <div className='hero-slider'>
            {data.map((value, index) => (
                <HeroSliderItem key={index} item={value} active={index === activeSlide} />
            ))}
            {props.control ? (
                <div className="hero-slider__control">
                    <div className="hero-slider__control__item" onClick={prevslider}>
                        <i className='bx bx-chevron-left'/>
                    </div>
                    <div className="hero-slider__control__item">
                        <div className="index">
                            {activeSlide + 1 }/{data.length}
                        </div>
                    </div>
                    <div className="hero-slider__control__item" onClick ={nextslider}>
                        <i className='bx bx-chevron-right'/>
                    </div>
                </div>
            ) : null}
        </div>

    )
}

HeroSlider.propTypes = {
    data: PropTypes.array.isRequired,
    control: PropTypes.bool

}
const HeroSliderItem = props => {
    return (
        <div className={`hero-slider__item  ${props.active ? 'active' : ''}`}>
            <div className="hero-slider__item__info">
                <div className={`hero-slider__item__info__title color-${props.item.color}`}>
                    <p>{props.item.title}</p>
                </div>
                <div className="hero-slider__item__info__description">
                    <p>{props.item.description}</p>
                </div>
                <div className="hero-slider__item__info__btn">
                    <Link to={props.item.path}>
                        <button>
                            Xem chi tiết
                        </button>
                    </Link>
                </div>
            </div>
            <div className="hero-slider__item__image">
                <div className={`shape bg-${props.item.color}`}></div>
                <img src={props.item.img} alt="" />
            </div>
        </div>

    )
}

export default HeroSlider
