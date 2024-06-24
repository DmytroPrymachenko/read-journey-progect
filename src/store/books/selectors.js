export const selectRecommendedBooks = (state) => state.books.recommendedBooks;

export const selectTotalPages = (state) => state.books.totalPages;
export const selectPrevUserBooks = (state) => state.userBooks.prevUserBooks;
export const selectRecommended = (state) => state.recommend;
export const selectUserBooks = (state) => state.userBooks.userBooks;
export const selectBookInfo = (state) => state.userBooks.bookInfo;
export const selectBookProgress = (state) => state.userBooks.bookInfo.progress;
export const selectPath = (state) => state.books.path;
export const selectReadingInfo = (state) => state.userBooks.readingState;
export const selectOption = (state) => state.userBooks.option;
export const selectfilteredUserBooks = (state) =>
  state.userBooks.filteredUserBooks;
