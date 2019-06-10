export function indexOfAll(inputArray, value) {
  const arrayIndexes = inputArray.reduce((acc, curVal, index) => {
    if (curVal === value) {
      acc.push(index);
    }
    return acc;
  }, []);
  return arrayIndexes;
}

