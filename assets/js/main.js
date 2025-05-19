// Blocks main thread for 3s on button click
function heavyLoop() {
  const start = Date.now();
  while (Date.now() - start < 3000) {
    // burn CPU
  }
  alert('Heavy loop complete');
}

// Busy polling to increase TBT & memory usage
setInterval(() => {
  const arr = Array.from({ length: 500000 }, (_, i) => i);
  console.log(arr[0]);
}, 500);

// Global namespace pollution
var globalCounter = 0;
function increment() { globalCounter++; }