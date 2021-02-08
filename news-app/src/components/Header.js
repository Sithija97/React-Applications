import React from 'react'
import './customStyles.css'
import img from '../images/2642704.jpg'

const Header = () => {
    return (
        <div className="container">
            <div className="row">
            <div className="col-sm"><h3 className='title'>iWeb-News</h3></div>
            <div className="col-sm"><img src={img} alt="" className='img'/> </div>
            </div>
        </div>    
            
    )
}
export default Header;