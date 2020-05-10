import React from 'react'

const Prices = ({ price, name }) => {
    console.log(price);
    if (price == null) {
        return (      
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">No info found</p>
                </div>
            </div>
        )
    }
    return (
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">{price.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{price.merchant}</h6>
                <p class="card-text">{price.price}</p>
            </div>
        </div>
    )
};

export default Prices
