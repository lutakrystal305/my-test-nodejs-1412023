const result = [];
const resolve = (x, k, temp) => {
  if (x - k === 0) {
    result.push(temp + k);
    return;
  } else if (x - k < 0) {
    return;
  } else {
    x -= k;
    temp = k > 0 ? temp + k : temp;
    for (let i = 1; i <= 2; i++) {
      resolve(x, i, temp);
    }
    x += k;
  }
};
const main = () => {
  resolve(5, 0, "");
  console.log(result);
};

main();
