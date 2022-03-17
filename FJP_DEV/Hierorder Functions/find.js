//it return only one value which ancounter first in a array
let transactions = [100, 2333, 3333, -234];
let FWidrawl = transactions.find((value) => {
  return value < 0;
});
console.log(FWidrawl);
