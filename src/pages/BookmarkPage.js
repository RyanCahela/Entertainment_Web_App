import React from "react";
import Grid from "../components/layout/Grid";
import MediaCard from "../components/card/MediaCard";

const BookmarkPage = ({ bookmarkCards }) => {
  console.log("bookmarkCards", bookmarkCards);
  return (
    <div>
      <h3>Bookmarks</h3>
      <Grid>
        {bookmarkCards.map((bookmarkCard) => (
          <MediaCard {...bookmarkCard} key={bookmarkCard.id} />
        ))}
      </Grid>
    </div>
  );
};

export default BookmarkPage;
