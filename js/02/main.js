import './style.css'
const givenArry = prompt("please enter your list of number seperated with comma").split(",");
console.log(givenArry);
const numberArray = givenArry.map(Number);
function compressedInts(arr) {

  const compressed = [];
  let start = arr[0];
  let end = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === end + 1) {
      end = arr[i];
    } else {
      if (start === end) {
        compressed.push(start.toString());
      } else {
        compressed.push(`${start} _ ${end}`);
      }
      start = arr[i];
      end = arr[i];
    }
  }

  if (start === end) {
    compressed.push(start.toString());
  } else {
    compressed.push(`${start} - ${end}`);
  }

  return compressed;
}


console.log(compressedInts(numberArray));
