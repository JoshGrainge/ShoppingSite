function Rating({ rating, ratingCount }) {
  const elements = [];
  for (let i = 0; i < 5; i++) {
    const starClass = rating > i ? 'fill star' : 'star';
    const star = (
      <span key={i} className={starClass}>
        &#9733;
      </span>
    );
    elements.push(star);
  }

  elements.push(<span>({ratingCount})</span>);

  return <div className="star-container">{elements}</div>;
}

export default Rating;
