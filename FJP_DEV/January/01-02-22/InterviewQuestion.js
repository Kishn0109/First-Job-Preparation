// convert dollar into the rupeese using map function
const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500]; //in repeese
const inrtToUsd = 74; //1 dollar =74 repeese
let ans = transactions.map((dollar) => {
  return (dollar / inrtToUsd).toFixed(0); //repeese
});
console.log(ans);
