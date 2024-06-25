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
