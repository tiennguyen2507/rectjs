import React from 'react'
import PropTypes from 'prop-types'

const Grid = props => {
    const style ={
        gap:props.gap ? `${props.gap}px`:'0'
    }
    const col =props.col ? `grid-col-${props.col}` : ""
    const mdCol =props.mdCol ? `grid-col-md${props.mdCol}` : ""
    const smcol =props.smcol ? `grid-col-sm${props.smcol}` : ""


    return (
        <div className={`grid ${col}  ${mdCol} ${smcol}`} style = {style}>
           {props.children}
        </div>
    )
}

Grid.propTypes = {
    col:PropTypes.number.isRequired,
    mdCol:PropTypes.number,
    smCol:PropTypes.number,
    gap:PropTypes.number

}

export default Grid

