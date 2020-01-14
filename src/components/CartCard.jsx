import React from "react";

function CartCard({
  author,
  quote,
  quantity,
  image,
  id,
  price,
  addItemToCart,
  removeItemFromCart
}) {
  const handleAddClick = event => id => {
    event.preventDefault();
    addItemToCart(id);
  };

  const handleRemoveClick = event => id => {
    event.preventDefault();
    removeItemFromCart(id);
  };

  return (
    <StyledCartCard>
      <div className="media-image-wrapper">
        <CardMedia
          className="media-image"
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={image}
          title="Contemplative Reptile"
        />
      </div>
      <div className="card-info-area">
        <Typography variant="h6">{author}</Typography>
        <Typography variant="h6" className="truncate">
          {quote}
        </Typography>
        <Typography>Price: {formatter.format(price)}</Typography>
      </div>
      <div className="card-action-area-wrapper">
        <Typography variant="p" className="card-quantity">
          Qty: {quantity}
        </Typography>
        <div className="card-action-area">
          <Fab
            size="small"
            aria-label="add"
            onClick={event => handleAddClick(event)(id)}
            className="add-button card-action-button"
          >
            <AddIcon className="card-action-icon" />
          </Fab>
          <Fab
            aria-label="add"
            size="small"
            onClick={event => handleRemoveClick(event)(id)}
            className="remove-button card-action-button"
          >
            <RemoveIcon className="card-action-icon" />
          </Fab>
        </div>
      </div>
    </StyledCartCard>
  );
}
export default CartCard;
