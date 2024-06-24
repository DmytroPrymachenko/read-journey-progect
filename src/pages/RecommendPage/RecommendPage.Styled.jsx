import styled from "styled-components";
export const RecommendPageWraper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (min-width: 1280px) {
    flex-direction: row;
  }
`;

const capitalizeWord = (word) => {
  if (word.length === 0) return "";
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
};

const transformTitle = (title) => {
  const words = title.split(" ");
  const transformedWords = words.map((word) =>
    word.charAt(0) === word.charAt(0).toUpperCase()
      ? capitalizeWord(word)
      : word
  );
  return transformedWords.join(" ");
};

const truncateTitle = (title, maxLength) => {
  if (title.length <= maxLength) {
    return transformTitle(title);
  }

  let truncated = title.substring(0, maxLength).trim();

  // Видалити пробіл, якщо він є в кінці
  if (truncated.endsWith(" ")) {
    truncated = truncated.slice(0, -1);
  }

  // Видалити крапку або кому, якщо вони є в кінці
  if (truncated.endsWith(".") || truncated.endsWith(",")) {
    truncated = truncated.slice(0, -1);
  }

  return `${transformTitle(truncated)}...`;
};

const bookTitle = "Book New Dark Ages. Book 1: The Colony";
const truncatedTitle = truncateTitle(bookTitle, 20);

console.log(truncatedTitle); // "Book New Dark Ages..."
