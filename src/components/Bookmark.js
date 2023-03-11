import './Bookmark.css';
import BookmarkCard from './BookmarkCard';

function Bookmark() {
  return (
    <main>
      <h2>Bookmarked Items</h2>
      <div className="items-container">
        <BookmarkCard
          name="Bag"
          price="$19.45"
          image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        />
        <BookmarkCard
          name="Bag2"
          price="$19.45"
          image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        />
        <BookmarkCard
          name="Bag3"
          price="$19.45"
          image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        />
        <BookmarkCard
          name="Bag4"
          price="$19.45"
          image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        />
      </div>
    </main>
  );
}

export default Bookmark;
