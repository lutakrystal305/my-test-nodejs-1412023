const retry = async (func, wait, options) => {
  let i = 0;
  while (i < options.max || !options.max) {
    try {
      const result = await func(wait);
      if (result) return result;
    } catch (error) {
      if (options.max) {
        i++;
      }
    }
  }
  return false;
};
const resolve = async (wait) => {
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = Math.floor(Math.random() * 100);
      console.log("random: " + result);
      if (result % 35 === 0) return resolve(true);
      return reject(false);
    }, wait);
  });
};
const main = async () => {
  const result = await retry(resolve, 2000, { max: null });
  console.log("result: " + result);
};
main();
