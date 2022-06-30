const reducer = (state, action) => {
  switch (action.type) {
    case "initialLoad":
      return action.payload;
    case "bookmarkClick":
      return state.map((mediaCard) => {
        if (mediaCard.id === action.payload.id) {
          if (mediaCard.isBookmarked) {
            return { ...mediaCard, isBookmarked: false };
          } else {
            return { ...mediaCard, isBookmarked: true };
          }
        }
        return mediaCard;
      });
    case "reset":
      return 0;
    default:
      throw new Error("Unexpected action");
  }
};

export default reducer;
