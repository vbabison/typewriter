const sentence = "hello there from lighthouse labs";
let count = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char); // print the char here
  }, count); // <= 50ms delay
  count += 50;
}
setTimeout(() => {
  process.stdout.write('\n');
}, count);