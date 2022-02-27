import React from "react";

export default function CartScreen(props) {
  const productId = props.match.params.id;
  //   if props.location.search exist "/cart/${productId}?qty=${qty}" it is a add to cart button event hander
  //   props.location.search returns "qty=${qty}"
  //   split it with = and get the second value props.location.search.split("=")[1]
  //   if it does not exist the default value should be 1
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;
  return (
    <div>
      <h1>Cart Screen</h1>
      <p>
        ADD TO CART : ProductID: {productId} Qty: {qty}
      </p>
    </div>
  );
}
