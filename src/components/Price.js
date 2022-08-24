import React, { memo } from 'react'

function Price({ price, priceWas }) {
    return (
        <div>
            <span className='price'>£{price}</span>  <span className='priceWas'>£{priceWas}</span>
        </div>
    )
}

export default memo(Price);