import './Bookmark.css';
import BookmarkCard from './BookmarkCard';

function Bookmark({ bookmarkItems, removeFromBookmark, addToCart }) {
  return (
    <main>
      <h2>Bookmarked Items</h2>
      <div className="items-container">
        {bookmarkItems.map((item) => {
          return (
            <BookmarkCard
              key={item.id}
              name={item.title}
              description={item.description}
              price={item.price}
              image={item.image}
              removeFromBookmark={() => {
                removeFromBookmark(item);
              }}
              addToCart={() => {
                addToCart(item);
              }}
            />
          );
        })}
      </div>
    </main>
  );
}

export default Bookmark;
