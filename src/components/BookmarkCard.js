function BookmarkCard({ image, name, price }) {
  return (
    <div className="bookmard-card">
      <img src={image} alt="item_preview" className="item-thumb" />

      <div className="full-height mid">
        <h3>{name}</h3>
        <button className="black small-btn">Remove</button>
      </div>

      <div className="full-height">
        <h3>{price}</h3>
        <button className="black">Add to Cart</button>
      </div>
    </div>
  );
}

export default BookmarkCard;
