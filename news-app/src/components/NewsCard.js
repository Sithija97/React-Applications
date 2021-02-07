import React from 'react'
import './customStyles.css'

const NewsCard = (props) => {
    return (
        <div className="col-sm">
            <div className="card" style={{ width: '20rem', margin: '10px' }}>
                <img src={props.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h6 className="card-text">{props.title}</h6>
                    <p className="card-text">{props.description}</p>
                </div>
            </div>
        </div>
    )
}
export default NewsCard;