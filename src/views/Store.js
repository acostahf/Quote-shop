import React from "react";
import PropTypes from "prop-types";
import StoreCard from "../components/StoreCard";
import { StyledStoreCardContainer } from "../styles/StyledStoreCardContainer";

function Store({ store }) {
  const storeCards = store.map(
    ({ id, author, quantity, price, quote, image }) => (
      <StoreCard
        id={id}
        author={author}
        image={image}
        quantity={quantity}
        price={price}
        quote={quote}
      />
    )
  );
  return <StyledStoreCardContainer>{storeCards} </StyledStoreCardContainer>;
}

export default Store;

Store.propTypes = {
  store: PropTypes.array.isRequired
};
