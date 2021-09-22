const argArray = process.argv.slice(2, process.argv.length).sort((a, b) => a - b);

if (argArray.length === 0) {
  return;
}

for (let delay of argArray) {
  if (!(delay < 0) && !(isNaN(delay))) {
    setTimeout(() => {
      console.log("\007");
    }, delay * 1000);
  }
}