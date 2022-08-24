import React, { memo } from "react";

import { Card } from "react-bootstrap";

import StockLevel from "./StockLevel";
import Price from "./Price";
import PromotionBadge from "./PromotionBadge";

function Product({ product }) {
  return (
    <Card className="my-3 p-0 rounded" style={{ height: "40rem" }}>
      <Card.Img src={product.imageUrl} />

      <Card.Body className="my-3 p-0">
        <Card.Text as="h3" className="p-0">
          <PromotionBadge promoBadge={product.promotionBadge} />
        </Card.Text>

        <Card.Text as="h4" className="my-0 p-2">
          {product.name}
        </Card.Text>
        <Card.Text as="h4" className="my-0 p-2">
          <Price price={product.price} priceWas={product.priceWas} />
        </Card.Text>
        <Card.Text as="h4" className="my-0 p-2">
          <StockLevel available={product.available} quantity={product.quantity} lowStock={product.lowOnStock} />
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default memo(Product);