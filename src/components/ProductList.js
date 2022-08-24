import React, { memo } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import useProducts from "../hooks/useProducts"
import Product from "./Product";
import Spinner from "./Spinner"
import SelectAllCheckBox from "./SelectAllCheckBox";
import RemoveButton from "./RemoveButton";



const ProductList = () => {

  const { products, loading, isAllSelected, handleSelectAll, handleSelect, handleDelete, handleRefreshProducts } = useProducts({
    list: [],
    count: 0,
  })


  return (
    < div>
      <RemoveButton products={products} handleDelete={handleDelete} />
      <SelectAllCheckBox isSelected={isAllSelected} handleSelectAll={handleSelectAll} hasProducts={products.list.length > 0} />
      <Spinner loading={loading} />
      < Row className="row">
        {
          typeof products.list === "undefined" || products.list === null || products.list.length === 0 ? (
            <div className="centre">
              <p>All products have been deleted</p>
              <Button variant="info" onClick={handleRefreshProducts}> Refresh Products </Button>
            </div>

          ) :
            (products.list.map((product) => (
              <Col key={product.productId} sm={12} md={3} lg={3} xl={3}>
                <Form>
                  <Form.Group controlId="formBasicCheckbox">
                    <Form.Check
                      className="checkBox"
                      type="checkbox"
                      id={product.productId}
                      checked={product.value}
                      onChange={handleSelect}
                    />
                  </Form.Group>
                </Form>
                <Product product={product} />
              </Col>
            )))
        }

      </Row >
    </div >
  );
}


export default memo(ProductList);
