let ip = "2001:db8:3333:4444:5555:6666:7777:8888";

let re = ip.match(/\d{4}:\w{3}:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}/gi);

console.log(re);

