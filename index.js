// Driver code
import './style.css';

let sum = function (...a) {
  // Write your code here
  const storage = [...a];
  const temp = (...args) => {
    if (args.length === 0) {
      return storage.reduce((acc, val) => acc + val, 0);
    } else {
      storage.push(...args);
      return temp;
    }
  };
  return temp;
};

console.log(sum(1)(2)());
