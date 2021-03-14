export default (arr) => {
  const count = Math.floor(arr.length / 3) + Math.floor(arr.length % 3);
  let result = new Array();
  for (let i = 0; i < count; i++) {
    let items = [];
    let item;
    let j = 0;
    while (j < 3) {
      item = arr.pop();
      if (item != undefined) {
        items.push(item);
      }
      j += 1;
      if (j == 3) {
        result.push({
          [i]: items,
        });
        items = [];
      }
    }
  }
  return result;
};
