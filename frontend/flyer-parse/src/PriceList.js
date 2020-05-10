import React from 'react'

const Prices = ({ price }) => {
    console.log(price);
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
