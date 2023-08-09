let date = new Date();
date.setDate(0);

console.log(date);

let monthNames = ["Jan", "Feb", "Mar", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

console.log(`Previous Month Is ${monthNames[date.getUTCMonth()]} And Last Day Is ${date.getDate()}`);

// Needed Output

"Sat Apr 30 2022 18:13:20 GMT+0200 (Eastern European Standard Time)"
"Previous Month Is April And Last Day Is 30"