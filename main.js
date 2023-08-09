let t0 = performance.now();

for (let i = 0; i <= 9999; i++){
  console.log(i);
}

let t1 = performance.now();

console.log(`Loop Took ${(t1 - t0).toFixed()} Milliseconds.`);

// Needed Output

"Loop Took 1921 Milliseconds."