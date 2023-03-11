function BookmarkCard({ image, name, description, price }) {
  const usdFormatter = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <div className="bookmard-card">
      <img src={image} alt="item_preview" className="item-thumb" />
      <div className="full-height mid">
        <h3>{name}</h3>
        <small>
          <p className="bookmark-description">{description}</p>
        </small>
        <button className="black small-btn">Remove</button>
      </div>
      <div className="full-height end">
        <div className="price-text">
          <h3>{usdFormatter.format(price)}</h3>
          <small>
            <p>USD</p>
          </small>
        </div>
        <button className="black">Add to Cart</button>
      </div>
    </div>
  );
}

export default BookmarkCard;
