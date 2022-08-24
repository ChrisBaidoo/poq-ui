import React from "react";


function StockLevel({ available, quantity, lowStock }) {


  return (
    <>
      {(available === "FALSE" || quantity === 0) && (
        <div className="outOfStock">OUT OF STOCK</div>
      )}


      {available === "TRUE" && quantity > 0 && (
        <>
          <div className="inStock">{quantity} in stock</div>
          {lowStock === "TRUE" && <div className="lowOnStock">LOW ON STOCK</div>}

        </>
      )}
    </>
  );
}

export default StockLevel;
