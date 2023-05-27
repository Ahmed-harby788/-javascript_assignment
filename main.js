let day = "   friday  ";
// You Need To Remove Spaces And Make First Letter Capital => Friday
day = day.trim();
day = day.charAt(0).toUpperCase() + day.slice(1);

switch (day){
    case "Friday":
    case "Saturday":
    case "Sunday":
        console.log("No Appointments Available")
    case "Monday":
    case "Thursday":
        console.log("From 10:00 AM To 5:00 PM")
    case "Thursday":
        console.log("From 10:00 AM To 6:00 PM")
    case "Wednesday":
        console.log("From 10:00 AM To 7:00 PM")
    case "World":
        console.log("Its Not A Valid Day")
}

