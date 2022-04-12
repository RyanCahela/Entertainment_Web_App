import styled from "styled-components";
import { ReactComponent as IconNavBookmark } from "../../assets/icon-nav-bookmark.svg";

const BookmarksIcon = styled(IconNavBookmark)`
  color: ${({ pathname }) =>
    pathname === "/bookmarks"
      ? "var(--clr-white)"
      : "var(--clr-primary-light)"};
`;

export default BookmarksIcon;
