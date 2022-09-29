const wordSearch = (letters, word) => {
  if (!word) {
    return undefined;
  }
  if (letters.length < 1) {
    return undefined;
  }
  const horizontalJoin = letters.map((ls) => ls.join(""));
  for (l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }
  const verticalJoin = transpose(letters).map((ls) => ls.join(""));
  for (l of verticalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }
  return false;
};

const transpose = function (matrix) {
  let newMatrix = [];
  for (const row in matrix[0]) {
    let col = [];
    for (const column of matrix) {
      col.push(column[row]);
    }
    newMatrix.push(col);
  }
  return newMatrix;
};
module.exports = wordSearch;
