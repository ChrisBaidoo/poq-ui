
import React, { memo } from 'react';
import { Button } from "react-bootstrap";


const RemoveButton = ({ products, handleDelete }) => {
    const count = products.count
    return (
        count > 0 && (<Button variant="info" onClick={handleDelete}>
            Remove
            { count === 1
                ? ` ${count} selected product`
                : ` ${count} selected products`}
        </Button>)

    );
}

export default memo(RemoveButton);