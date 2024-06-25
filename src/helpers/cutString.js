export function cutString(str, num) {
  const arr = str.split(" ");
  let newStr = "";
  let outputStr = "";

  if (num >= str.length) {
    newStr = str;
  } else {
    for (let i = 0; i < arr.length; i += 1) {
      if (newStr.length <= num - 2) {
        newStr += arr[i] + " ";

        if (newStr.length > num - 2) {
          outputStr = newStr.slice(0, -(arr[i].length + 2)) + "...";
        }
      }
    }
    newStr = outputStr;
  }
  return newStr;
}

// capitalizeWord

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

  if (truncated.endsWith(" ")) {
    truncated = truncated.slice(0, -1);
  }

  if (truncated.endsWith(".") || truncated.endsWith(",")) {
    truncated = truncated.slice(0, -1);
  }

  return `${transformTitle(truncated)}...`;
};

export { transformTitle, truncateTitle };
